export default async function ({ addon, console }) {
  let LocationParams = new URLSearchParams(location.search);
  let displayDownloadButton = false;
  
  // Check if the button should be displayed
  if (LocationParams.get('page')){
      if (LocationParams.get('page') == '1') displayDownloadButton = true;
  }else{ displayDownloadButton = true; }
  
  // If the button should be displayed, then do it!
  if (displayDownloadButton) {
      var anchor = document.createElement('a');
      anchor.href = '//s2forums-archiver.glitch.me/' + location.pathname.split('/')[3];
      
      var image = document.createElement('img');
      image.src = '//cdn.glitch.global/d351f02c-8f78-4606-9c56-aa395bf6f264/icon.png';
      image.alt = '[Download Archive]';
      image.title = '[Download Archive]';
      image.classList.add('breadcrumb_rss');
      
      anchor.append(image);
      document.querySelector('.breadcrumb_rss').after(document.createTextNode(' '), anchor);
  }
}
