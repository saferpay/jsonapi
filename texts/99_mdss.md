# Markdown CheatSheet

This is intended as a quick reference and showcase. For more complete info, see [John Gruber's original spec](http://daringfireball.net/projects/markdown/).

## <a name='TOC'></a>Table of Contents

1. [Headers](#headers)
1. [Emphasis](#emphasis)
1. [Lists](#lists)
1. [Links](#links)
1. [Images](#images)
1. [Code and Syntax Highlighting](#code)
1. [Tables](#tables)
1. [Blockquotes](#blockquotes)
1. [Inline HTML](#html)
1. [Horizontal Rule](#hr)
1. [Line Breaks](#lines)
1. [Youtube videos](#videos)


--->>>
```

## <a name='TOC'></a>Table of Contents

1. [Table of Contents](#TOC)
1. [Headers](#headers)
...

```
<<<---






## <a name="headers"></a>Headers


Lots going on here, as you notice we use the Anchor HTML element `a` for the header names, the `name` attribute is what we are going to use internally to create links inside the document. `<a name="tocs">` Once this is defined we can then create a link to point to that anchor using just the pount key like so: `[Go to TOCS](#tocs)`.

--->>>
```
# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
```
<<<---

# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------







## <a name="emphasis"></a>Emphasis

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

--->>>
```
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```
<<<---








## <a name="lists"></a>Lists

1. First ordered list item
1. Another item
  * Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
1. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.
   Note that this line is separate, but within the same paragraph.
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

--->>>

(In this example, leading and trailing spaces are shown with with dots: ⋅)
```
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses
```
<<<---






## <a name="links"></a>Links

There are two ways to create links.

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself]

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com


--->>>
```
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself]

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
```
<<<---





## <a name="images"></a>Images

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

--->>>
```
Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
```
<<<---







## <a name="code"></a>Code and Syntax Highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, we support some syntax highlighting; to see the complete list, and how to write the language names, see the [highlight.js demo page](http://softwaremaniacs.org/media/soft/highlight/test.html).

Inline `code` has `back-ticks around` it.

--->>>
```
Inline `code` has `back-ticks around` it.
```
<<<---

Blocks of code are either fenced by lines with three back-ticks <code>```</code>, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

C# that way

```cs
var s = "C# syntax highlighting";
Console.WriteLine(s);
```

Just code

```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```

--->>>
<pre>
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

C# that way

```cs
var s = "C# syntax highlighting";
Console.WriteLine(s);
```

Just code

```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```
</pre>
<<<---



Or just move any content (but no head line) to the right by using `--->>>` `<<<---`




## <a name="tables"></a>Tables

Tables aren't part of the core Markdown spec, you have to write html.

<table class="table table-striped">
  <thead>
    <tr>
      <th>Header</th>
      <th>Another Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>field 1</td>
      <td>value one</td>
    </tr>
  </tbody>
</table>

--->>>
```
<table class="table table-striped">
  <thead>
    <tr>
      <th>Header</th>
      <th>Another Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>field 1</td>
      <td>value one</td>
    </tr>
  </tbody>
</table>
```
<<<---





## <a name="blockquotes"></a>Blockquotes

```
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.
```

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.



## <a name="html"></a>Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

```
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>



## <a name="hr"></a>Horizontal Rule

```
Three or more...

---

Hyphens

***

Asterisks

___

Underscores
```

Three or more...

---

Hyphens

***

Asterisks

___

Underscores



## <a name="lines"></a>Line Breaks

My basic recommendation for learning how line breaks work is to experiment and discover -- hit &lt;Enter&gt; once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens. You'll soon learn to get what you want. "Markdown Toggle" is your friend.

Here are some things to try out:

```
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.
```

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also begins a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

