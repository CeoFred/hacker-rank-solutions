<div id="521e954e6ff11-instruction">
<div class="ps-content-wrapper-v0">
<p>Given a number <em>n</em>, for each integer <em>i</em>&nbsp;in the range from <em>1</em>&nbsp;to <em>n</em>&nbsp;inclusive, print one value per line as follows:</p>

<p>&nbsp;</p>

<ul>
	<li>If <em>i</em> is a multiple of both <em>3</em> and <em>5</em>, print <em>FizzBuzz</em>.</li>
	<li>If <em>i</em> is a multiple of <em>3</em> (but not <em>5</em>), print <em>Fizz</em>.</li>
	<li>If <em>i</em> is a multiple of <em>5</em> (but not <em>3</em>), print <em>Buzz</em>.</li>
	<li>If <em>i</em> is not a multiple of <em>3</em>&nbsp;or <em>5</em>, print the value of <em>i</em>.</li>
</ul>

<p>&nbsp;</p>


<p class="section-title">Function Description</p>

<p>Complete the function <em>fizzBuzz</em> in the editor below.</p>

<p>&nbsp;</p>

<p>fizzBuzz has the following parameter(s):</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;<em>int n:</em>&nbsp; upper limit of values to test (inclusive)</p>

<p>Returns:&nbsp;&nbsp;&nbsp;&nbsp;NONE</p>

<p>Prints:</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;The function must print the appropriate response for each value <em>i </em>in the set<em> {1, 2, ... n}</em>&nbsp;in ascending order, each on a separate line.</p>

<p>&nbsp;</p>

<p class="section-title">Constraints</p>

<ul>
	<li><em>0 &lt; n &lt; 2 × 10<sup>5</sup></em></li>
</ul>
<!--       <StartOfInputFormat> DO NOT REMOVE THIS LINE-->

<details><summary class="section-title">Input Format for Custom Testing</summary>

<div class="collapsable-details">
<p>Input from stdin will be processed as follows and passed to the function.</p>

<p>&nbsp;</p>

<p>The single integer <em>n</em>, the limit of the range to test: [1, 2, ...n].</p>
</div>
</details>

<details open="open"><summary class="section-title">Sample Case 0</summary>

<div class="collapsable-details">
<p class="section-title">Sample Input</p>

<pre>STDIN&nbsp;&nbsp;&nbsp;&nbsp;Function
-----&nbsp;&nbsp;&nbsp;&nbsp;--------
15&nbsp;&nbsp;&nbsp;&nbsp;→  n = 15</pre>

<p>&nbsp;</p>

<p class="section-title">Sample Output</p>

<pre>1     
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz</pre>

<p>&nbsp;</p>

<p class="section-title">Explanation</p>

<p>The numbers <em>3</em>, <em>6</em>, <em>9</em>, and <em>12</em> are multiples of <em>3</em> (but not <em>5</em>), so print <em>Fizz</em> on those lines.</p>

<p>The numbers <em>5</em> and <em>10</em> are multiples of <em>5</em> (but not <em>3</em>), so print <em>Buzz</em> on those lines.</p>

<p>The number <em>15</em> is a multiple of both <em>3</em> and <em>5</em>, so print <em>FizzBuzz</em> on that line.</p>

<p>None of the other values is a multiple of either <em>3</em> or <em>5</em>, so print the value of <em>i</em> on those lines.</p>
</div>
</details>
</div>
</div>