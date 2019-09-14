import React from 'react';
import NavigationItem from 'components/navigation/NavigationItem';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <NavigationItem name="MAIN" link="/main" />
        <NavigationItem name="STATS" link="/stats" />
        <NavigationItem name="REWARDS" link="/rewards" />
        <NavigationItem name="GRABBOMATS" link="/maps" />
      </ul>
    </nav>
  );
};

export default Navigation;
