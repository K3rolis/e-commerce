import React from 'react';
import styles from './Footer.module.css';

import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { Container } from '../Container/Container';

export const Footer = () => {
  return (
    <div>
      <Container>
        <div className={styles.logoBox}>
          <a href="https://github.com/K3rolis/typescript-e-commerce" target="_blank" rel="noopener noreferrer">
            <BsGithub className={styles.logo} />
          </a>

          <a href="https://www.linkedin.com/in/k3rolis/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin className={styles.logo} />
          </a>
        </div>

        <div className={styles.footerText}>© 2023 Your Company, Inc. All rights reserved.</div>
      </Container>
    </div>
  );
};
