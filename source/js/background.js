
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
   if(tab.url.startsWith('https://osu.ppy.sh/users/') && changeInfo.status === 'complete'){
      chrome.scripting.executeScript({
         target: {tabId: tab.id, allFrames: true},
         files: ['./js/script.js']
      });
   }
}); 
