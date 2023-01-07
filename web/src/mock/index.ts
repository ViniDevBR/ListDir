import { IFiles } from '../@types/Files'

export const API = [
  {
    name: 'doc.txt',
    kind: 'file'
  },
  {
    name: 'doc.txt',
    kind: 'file'
  },
  {
    name: 'doc.txt',
    kind: 'file'
  },
  {
    name: 'documents',
    kind: 'directory',
    directory: [
      {
        name: 'Provas.xlsx',
        kind: 'file'
      },
      {
        name: 'Compras.xlsx',
        kind: 'file'
      }
    ]
  },
  {
    name: 'documents',
    kind: 'directory',
    directory: [
      {
        name: 'Compras.xlsx',
        kind: 'file'
      }
    ]
  },
] satisfies Array<IFiles>