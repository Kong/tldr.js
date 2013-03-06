# jquery.tldr.js

Micro Read-more Script

Substring paragraphs that are verbose and long, while making them expandable with a "more" link.

# Usage

```javascript
$(/* element */).more({ /* options */ })
```

# Options

* `text.more` **String** *Read more text for `.more-link` when `.more-container` can be expanded*
* `text.less` **String** *Read less text to be shown upon expansion*
* `length` **Number** *Characters to show before trimming excess off.*
  * If element inner text is shorter than `length` we ignore the element and continue.

# Legal Stuff

Copyright 2013 Mashape, authored by Nijiko Yonskai

Licensed under MIT License