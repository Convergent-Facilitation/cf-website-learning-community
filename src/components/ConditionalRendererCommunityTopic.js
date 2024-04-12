import React from 'react';

const ConditionalRenderer = ({ frontMatter, children }) => {
  // Check if `yourSpecificKey` exists in the `frontMatter`
  if (frontMatter && frontMatter.community_topic !== undefined) {
    // The key exists, render children regardless of the truthiness of the value
    return <>{children}</>;
  }

  // Key does not exist, render nothing or some fallback
  return null;
};

export default ConditionalRenderer;

