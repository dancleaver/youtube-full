# youtube-full

Bookmarklet that removes obstructions from the Youtube video player.

When run, it removes all the UI elements except the thumbnail and the video itself. Effectively, it removes obstructions like the progress bar, title and gradient at the top, and the channel icon in the bottom right. Using `MutationObserver`, it also removes new elements automatically as soon as they are loaded. These include the end cards, subscribe button, and channel icon at the end of a video.

## How to Use

- Create a new bookmark in your browser.

- Paste the contents of [script.js](./script.js) into the URL field.

- Open a Youtube video.

- Click the bookmark to run.

To put everything back how it was before, just refresh the page.
