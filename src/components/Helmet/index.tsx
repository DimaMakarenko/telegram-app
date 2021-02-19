import React from 'react';
import { Helmet } from 'react-helmet';
// localization
import { useTranslation } from 'react-i18next';

export const AppHelmet: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Helmet titleTemplate={`%s - ${t('helmet:telegram')}`} defaultTitle={t('helmet:telegram')}>
      <meta name='description' content='A React.js application' />
    </Helmet>
  );
};

type CustomHelmetProps = {
  title: string;
  description: string;
  content: string;
};

export const CustomHelmet: React.FC<CustomHelmetProps> = ({ title, description, content }) => {
  const { t } = useTranslation();
  return (
    <Helmet>
      <title>{t(title)}</title>
      <meta name={t(description)} content={t(content)} />
    </Helmet>
  );
};
