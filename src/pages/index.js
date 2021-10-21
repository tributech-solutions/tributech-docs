import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">

        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>



        <img src="/img/favicon.png" width="150" height="150"/>
        <p></p>
        <p className={styles.headertext}> Welcome to the official Tributech DataSpace Kit documentation page!</p>
        <p className={styles.headertext}> If you want to find out more about the DataSpace Kit and the concepts behind it, we suggest starting with our Introduction page. If you are already familiar with our product but want to find out more about the basic setup and how you can join our <Link to="https://tributech.io/playground"><b>Playground Ecosystem</b></Link>, we suggest starting directly with our Quickstart Guide:</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction/overview"
          >
            Jump to Introduction
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/quickstart/overview"
          >
            Jump to Quickstart
          </Link>
        </div>

      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentation for the Tributech DataSpace Kit."
    >
      <HomepageHeader />

    </Layout> 
  );
}
