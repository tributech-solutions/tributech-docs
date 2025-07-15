import React from 'react';
import { useActivePluginAndVersion } from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';

export default function NavbarCSDKLink() {
  const { activeVersion } = useActivePluginAndVersion();

  // Only show for version 5.0.0
  if (!activeVersion || activeVersion.name !== '5.0.0') {
    return null;
  }

  return (
    <Link
      className="navbar__item navbar__link"
      to="/tributech_c_sdk/overview"
    >
      Tributech C-SDK
    </Link>
  );
}
