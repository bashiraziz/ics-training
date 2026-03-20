import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/dashboard',
    component: ComponentCreator('/dashboard', '857'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '389'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'fd1'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '9e9'),
            routes: [
              {
                path: '/advanced/flashcards/module-1',
                component: ComponentCreator('/advanced/flashcards/module-1', '8c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/flashcards/module-2',
                component: ComponentCreator('/advanced/flashcards/module-2', 'ecf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/flashcards/module-3',
                component: ComponentCreator('/advanced/flashcards/module-3', '7ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/flashcards/module-4',
                component: ComponentCreator('/advanced/flashcards/module-4', '5d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/flashcards/module-5',
                component: ComponentCreator('/advanced/flashcards/module-5', '8c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/flashcards/module-6',
                component: ComponentCreator('/advanced/flashcards/module-6', '550'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/flashcards/module-7',
                component: ComponentCreator('/advanced/flashcards/module-7', '22e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/flashcards/module-8',
                component: ComponentCreator('/advanced/flashcards/module-8', '01e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/practice/module-1',
                component: ComponentCreator('/advanced/practice/module-1', '736'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/practice/module-2',
                component: ComponentCreator('/advanced/practice/module-2', '68c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/practice/module-3',
                component: ComponentCreator('/advanced/practice/module-3', '128'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/practice/module-4',
                component: ComponentCreator('/advanced/practice/module-4', '2a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/practice/module-5',
                component: ComponentCreator('/advanced/practice/module-5', 'c85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/practice/module-6',
                component: ComponentCreator('/advanced/practice/module-6', 'ab9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/practice/module-7',
                component: ComponentCreator('/advanced/practice/module-7', '95e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/practice/module-8',
                component: ComponentCreator('/advanced/practice/module-8', '7e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/training/module-1',
                component: ComponentCreator('/advanced/training/module-1', '9a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/training/module-2',
                component: ComponentCreator('/advanced/training/module-2', '8e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/training/module-3',
                component: ComponentCreator('/advanced/training/module-3', '0b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/training/module-4',
                component: ComponentCreator('/advanced/training/module-4', 'b4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/training/module-5',
                component: ComponentCreator('/advanced/training/module-5', '4e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/training/module-6',
                component: ComponentCreator('/advanced/training/module-6', '303'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/training/module-7',
                component: ComponentCreator('/advanced/training/module-7', '499'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/advanced/training/module-8',
                component: ComponentCreator('/advanced/training/module-8', '84e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/flashcards/module-1',
                component: ComponentCreator('/beginner/flashcards/module-1', '604'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/flashcards/module-2',
                component: ComponentCreator('/beginner/flashcards/module-2', '403'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/flashcards/module-3',
                component: ComponentCreator('/beginner/flashcards/module-3', '3d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/flashcards/module-4',
                component: ComponentCreator('/beginner/flashcards/module-4', 'ced'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/flashcards/module-5',
                component: ComponentCreator('/beginner/flashcards/module-5', '90f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/flashcards/module-6',
                component: ComponentCreator('/beginner/flashcards/module-6', 'b38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/flashcards/module-7',
                component: ComponentCreator('/beginner/flashcards/module-7', '749'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/flashcards/module-8',
                component: ComponentCreator('/beginner/flashcards/module-8', '15b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/practice/module-1',
                component: ComponentCreator('/beginner/practice/module-1', '534'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/practice/module-2',
                component: ComponentCreator('/beginner/practice/module-2', 'e3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/practice/module-3',
                component: ComponentCreator('/beginner/practice/module-3', 'ec8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/practice/module-4',
                component: ComponentCreator('/beginner/practice/module-4', '12f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/practice/module-5',
                component: ComponentCreator('/beginner/practice/module-5', '9fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/practice/module-6',
                component: ComponentCreator('/beginner/practice/module-6', 'eb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/practice/module-7',
                component: ComponentCreator('/beginner/practice/module-7', '1ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/practice/module-8',
                component: ComponentCreator('/beginner/practice/module-8', 'f59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/training/module-1',
                component: ComponentCreator('/beginner/training/module-1', '016'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/training/module-2',
                component: ComponentCreator('/beginner/training/module-2', 'dbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/training/module-3',
                component: ComponentCreator('/beginner/training/module-3', '2f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/training/module-4',
                component: ComponentCreator('/beginner/training/module-4', 'ec4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/training/module-5',
                component: ComponentCreator('/beginner/training/module-5', '0b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/training/module-6',
                component: ComponentCreator('/beginner/training/module-6', '5ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/training/module-7',
                component: ComponentCreator('/beginner/training/module-7', '70b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/beginner/training/module-8',
                component: ComponentCreator('/beginner/training/module-8', '9e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/flashcards/module-1',
                component: ComponentCreator('/intermediate/flashcards/module-1', 'ac0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/flashcards/module-2',
                component: ComponentCreator('/intermediate/flashcards/module-2', 'fb9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/flashcards/module-3',
                component: ComponentCreator('/intermediate/flashcards/module-3', 'd0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/flashcards/module-4',
                component: ComponentCreator('/intermediate/flashcards/module-4', '97c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/flashcards/module-5',
                component: ComponentCreator('/intermediate/flashcards/module-5', '98a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/flashcards/module-6',
                component: ComponentCreator('/intermediate/flashcards/module-6', 'bf8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/flashcards/module-7',
                component: ComponentCreator('/intermediate/flashcards/module-7', 'a70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/flashcards/module-8',
                component: ComponentCreator('/intermediate/flashcards/module-8', 'bf1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/practice/module-1',
                component: ComponentCreator('/intermediate/practice/module-1', '359'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/practice/module-2',
                component: ComponentCreator('/intermediate/practice/module-2', '23e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/practice/module-3',
                component: ComponentCreator('/intermediate/practice/module-3', '493'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/practice/module-4',
                component: ComponentCreator('/intermediate/practice/module-4', 'a27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/practice/module-5',
                component: ComponentCreator('/intermediate/practice/module-5', 'bd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/practice/module-6',
                component: ComponentCreator('/intermediate/practice/module-6', 'abf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/practice/module-7',
                component: ComponentCreator('/intermediate/practice/module-7', '5ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/practice/module-8',
                component: ComponentCreator('/intermediate/practice/module-8', '2f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/training/module-1',
                component: ComponentCreator('/intermediate/training/module-1', 'cbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/training/module-2',
                component: ComponentCreator('/intermediate/training/module-2', '9ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/training/module-3',
                component: ComponentCreator('/intermediate/training/module-3', '891'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/training/module-4',
                component: ComponentCreator('/intermediate/training/module-4', '10c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/training/module-5',
                component: ComponentCreator('/intermediate/training/module-5', '54c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/training/module-6',
                component: ComponentCreator('/intermediate/training/module-6', '12f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/training/module-7',
                component: ComponentCreator('/intermediate/training/module-7', 'b10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intermediate/training/module-8',
                component: ComponentCreator('/intermediate/training/module-8', '3b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intro',
                component: ComponentCreator('/intro', '55e'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
