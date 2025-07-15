import React from 'react';
import { useActivePluginAndVersion } from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';

export default function NavbarOemModuleLink() {
  const { activeVersion } = useActivePluginAndVersion();

  // Show link only for versions where OEM Module exists
  const showOemLink =
    activeVersion &&
    (activeVersion.name === '4.0.0' || activeVersion.name === '3.6.0');

  if (!showOemLink) {
    return null;
  }

  return (
    <Link
      className="navbar__item navbar__link"
      to="oem_module/overview"
    >
      Tributech OEM Module
    </Link>
  );
}
