How to Add a Bookmarklet to Your Browser
1. Copy the Bookmarklet Code

First, copy the bookmarklet code provided. For example:


javascript:(function() {
    var script = document.createElement('script');
    script.src = 'https://raw.githubusercontent.com/username/repo/branch/script.js';
    document.head.appendChild(script);
})();


Make sure to replace 'https://raw.githubusercontent.com/username/repo/branch/script.js' with the actual URL to the raw GitHub file you want to run.

2. Open Your Browser's Bookmarks Bar
![image](https://github.com/user-attachments/assets/5999fd3b-06ec-4da1-a8f8-b0c9dae21f94)


In most browsers, you can enable the bookmarks bar by pressing Ctrl + Shift + B (Windows) or Cmd + Shift + B (Mac), or by going to your browser settings and enabling the bookmarks bar.
3. Create a New Bookmark
![image](https://github.com/user-attachments/assets/fb9ef161-bf20-41d8-8c84-bba258f2f90e)


Right-click anywhere on the bookmarks bar (or in the bookmarks section of your browser) and select Add Page or Add Bookmark (this varies by browser).
In the "Name" field, give your bookmarklet a name (e.g., "Run GitHub Script").
4. Paste the Bookmarklet Code
![image](https://github.com/user-attachments/assets/a2508eac-aa93-40b3-9a47-ed7e19f947aa)


In the "URL" or "Location" field, paste the bookmarklet code you copied in step 1.
Make sure the code starts with javascript: and is properly pasted without any breaks.
5. Save the Bookmark

After pasting the code, click Save or Add to save the bookmarklet to your bookmarks bar.
6. Test the Bookmarklet

Now, go to any webpage and click on the bookmarklet in your bookmarks bar.
The JavaScript file from the GitHub repo should be pulled and executed on the current page.
Note: Some websites may block external scripts, so the bookmarklet may not work on all pages.
