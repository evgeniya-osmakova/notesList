const url = 'http://0.0.0.0:7000';

export default {
  notesListUrl: () => [url, 'notes'].join('/'),
  noteItemUrl: (id) => [url, 'notes', id].join('/'),
};
