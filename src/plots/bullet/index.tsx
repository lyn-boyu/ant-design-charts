import React, { useImperativeHandle, forwardRef } from 'react';
import { Bullet as G2plotBullet, BulletOptions as G2plotConfig } from '@antv/g2plot';
import useChart from '../../hooks/useChart';
import { ContainerConfig } from '../../interface';
import { ErrorBoundary } from '../../base';
import ChartLoading from '../../util/createLoading';

export interface BulletConfig
  extends Omit<G2plotConfig, 'color' | 'label' | 'style'>,
    ContainerConfig<G2plotConfig> {}

const BulletChart = forwardRef((props: BulletConfig, ref) => {
  const {
    style = {
      height: 'inherit',
    },
    className,
    loading,
    loadingTemplate,
    errorTemplate,
    ...rest
  } = props;
  const { chart, container } = useChart<G2plotBullet, BulletConfig>(G2plotBullet, rest);

  useImperativeHandle(ref, () => ({
    getChart: () => chart.current,
  }));
  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

export default BulletChart;
