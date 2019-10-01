import React from 'react';
import MaterialsList from './MaterialsList';
import MaterialsListFilter from './MaterialsListFilter';
import WhatsApp from './WhatsApp';
import MatPaperButton from './MatPaperButton';
import Header from './Header';
import ShareButton from './ShareButton';

const Materials = () => (
  <div>
    <Header />
    <MatPaperButton />
    <MaterialsListFilter />
    <MaterialsList />
    <WhatsApp />
    <ShareButton />
  </div>
);

export default Materials;