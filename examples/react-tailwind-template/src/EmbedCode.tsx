import React from 'react';

interface EmbedCodeProps {
  embedCode: string;
}

const EmbedCode: React.FC<EmbedCodeProps> = ({ embedCode }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: embedCode }}
      style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}
    />
  );
};

export default EmbedCode;
