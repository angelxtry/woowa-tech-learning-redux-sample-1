import React from 'react';
import { Button } from 'antd';
import { PauseOutlined, CaretRightOutlined } from '@ant-design/icons';

interface PlayButtonProps {
  monitoring: boolean;
  onPlay?: () => void;
  onPause?: () => void;
}

export function PlayButton({ monitoring, onPlay, onPause }: PlayButtonProps): JSX.Element {
  const [isPlay, togglePlay] = React.useState<boolean>(monitoring);
  const renderIcon = isPlay ? <PauseOutlined /> : <CaretRightOutlined />;
  return (
    <Button
      style={{ marginTop: 20 }}
      shape="circle"
      icon={renderIcon}
      onClick={() => {
        if (onPlay && onPause) {
          if (isPlay) onPause();
          else onPlay();
        }
        togglePlay(!isPlay);
      }}
    />
  );
}
