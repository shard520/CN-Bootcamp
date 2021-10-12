# Find the Invisible Cow

A remake of [findtheinvisiblecow.com](https://findtheinvisiblecow.com)

This version uses a [module written as part of another project](https://github.com/shard520/circle-composer-app/blob/mvc-refactor/src/js/model/audioObj.js) of mine which asynchronously loads audio then plays it at a specific time. This avoids errors related to uncaught promises which can happen when using the default play method on an audio object triggered in quick succession. It also uses a scheduler function adapted from [this article](https://www.html5rocks.com/en/tutorials/audio/scheduling/) on the web audio API. Using the scheduler allows for a robust way of looping the sound at a specified interval, rather than on every mouse move event, as well as automatic changing of the sounds as the mouse gets nearer/farther from the cow.

Hit detection is done by calculating the distance from the cow as a percentage of the viewport.

Play the game here: <https://shard520.github.io/CN-Bootcamp/week-3/find-the-invisible-cow/>
