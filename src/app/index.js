import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    const addedNodes = mutation.addedNodes;
    if (addedNodes.length === 1 && addedNodes[0].classList.contains('inline-comments')) {
      const toolbar = mutation.addedNodes[0].querySelector('.js-toolbar');
      const formActions = mutation.addedNodes[0].querySelector('.form-actions');
      const container = document.createElement('div');
      const containerFormAction = document.createElement('div');
      container.classList.add('toolbar-group');
      toolbar.appendChild(container);
      formActions.prepend(containerFormAction);
      ReactDOM.render(<App textAreaId={mutation.addedNodes[0].querySelector('.form-control').id} />, container);
    }
  });
});

const config = { childList: true, subtree: true };
observer.observe(document, config);
