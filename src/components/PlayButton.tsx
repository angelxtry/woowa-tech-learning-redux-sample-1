import * as React from 'react';
import { Button } from 'antd';
import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons';

interface PlayButtonProps {
  monitoring: boolean;
  onPlay?: () => void;
  onPause?: () => void;
}

export const PlayButton: React.FC<PlayButtonProps> = ({ monitoring, onPlay, onPause }) => {
  const [isPlay, togglePlay] = React.useState(monitoring);
  const renderIcon = isPlay ? <PauseOutlined /> : <CaretRightOutlined />;

  return (
    <Button
      style={{ marginTop: 20 }}
      shape="circle"
      icon={renderIcon}
      onClick={() => {
        if (isPlay && onPause) {
          onPause();
        } else if (onPlay) onPlay();

        togglePlay(!isPlay);
      }}
    />
  );
};
