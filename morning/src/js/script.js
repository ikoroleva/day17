import { ProgressBar } from './ProgressBar';

document.addEventListener('DOMContentLoaded', () => {
  // @TODO no.1 create new instance of ProgressBar and append it body element.
  //    you shouldn't pass the whole progress bar to appendChild method, but only specific property
  //    explore class ProgressBar and find out which property it is.

  // @TODO no.2 fix missing icon on plus button

  // const progressBarElement = document.createElement('div');
  // document.body.appendChild(progressBarElement);

  const myProgressBar = new ProgressBar();
  //myProgressBar.refreshElement();
  //console.log(myProgressBar);
  document.body.appendChild(myProgressBar.element);

  const myProgressBar2 = new ProgressBar(0, 2, 100);
  document.body.appendChild(myProgressBar2.element);

  const myProgressBar3 = new ProgressBar(0, 10, 1000);
  document.body.appendChild(myProgressBar3.element);










});
