import { BreadcrumbData } from 'use-react-router-breadcrumbs';
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import './Breadcrumbs.scss';

const BreadcrumbTrail = (props: { breadcrumbs: BreadcrumbData<string>[] }) => {
  const { breadcrumbs } = props;
  return (
    <div className="breadcrumbs">
      {breadcrumbs.map(({ match, breadcrumb }) => {
        return (
          <span key={crypto.randomUUID()}>
            {(breadcrumb as ReactElement).props.children !== 'Character' && (
              <>
                {(breadcrumb as ReactElement).props.children !== 'Home' && (
                  <span style={{ padding: '10px' }}> {`>`} </span>
                )}
                <NavLink to={match.pathname}>{breadcrumb}</NavLink>{' '}
              </>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default BreadcrumbTrail;