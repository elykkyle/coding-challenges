/*
https://www.codewars.com/kata/63bd62e60634a6006a1b53c0

Let's draw mountain bike trails!

                               _--_ _
                    -__  _-‾‾‾-    -
         __     _--‾   ‾‾     _--_ _
 -__   -‾  ‾---‾   -__  _-‾‾‾-    -
    ‾-‾ __     _--‾   ‾‾
-__   -‾  ‾---‾
   ‾-‾

Task
"Given an array of numbers representing a mountain bike trail, render that trail as string."
Input
trail
an array containing integer numbers (-2 <= number <= 2)
the first number determines the token to use in the starting tile
each next number represents a delta height in sub tiles to draw the next token relative to the previous one
Output
return a string representing the mountain bike trail. The string is delimited with a newline '\n'. All lines have the same width. Leading and trailing whitespace is important.
tokens used in the string: '_', '-', '‾', ' '
the trail is rendered with a 3D-effect (see examples at the end of the Specification)
Input Constraints
Beginner Trails
100 random tests with 10 <= size <= 20
Novice Trails
100 random tests with 20 <= size <= 30
Extreme Trails
100 random tests with 30 <= size <= 40
100 chaotic random tests with 40 <= size <= 50
Specification
The output string can be viewed at in rows and columns.
A tile represents a cell at a given row and column.
A tile can hold 3 different values, depending on which sub tile is used:
sub tile 0: '_' (underscore)
sub tile 1: '-' (dash)
sub tile 2: '‾' (upperscore)
if no sub tile is used: ' ' (whitespace)
there can always be at most 1 sub tile used per tile (there will be no conflicts)
Any number in the trail is a delta value added to the previous number.
Any accumulated number modulo 3 represents the sub tile that is being used in a tile.
Examples:

Notice that we sometimes need to create an additional row to render all sub tiles.

trail           sub tile values     rendered ('*' as whitespace)

[0, 1, -1]      [0, 1, 0]            _-_

[1, 1, -1]      [1, 2, 1]            -‾-

[2, 1, -1]      [2, 3, 2]            *_*
                                     ‾ ‾
[0, -1, 1]      [0, -1, 0]           _*_
                                     *‾*
[1, -1, 1]      [1, 0, 1]            -_-

[2, -1, 1]      [2, 1, 2]            ‾-‾

[0, 1, 1]       [0, 1, 2]            _-‾

                                     **_
[1, 1, 1]       [1, 2, 3]            -‾*

                                     *_-
[2, 1, 1]       [2, 3, 4]            ‾**

To draw the trail, a 3D-effect must be created
draw the bottom part of trail
draw the same pattern 2 tiles higher and 1 tile to the right
make sure to align both patterns in a way there is no unwanted padding
trail           sub tile values     rendered ('*' as whitespace)

                                     *_-_
                                     ****
[0, 1, -1]      [0, 1, 0]            _-_*


                                     *_*_
                                     **‾*
[0, -1, 1]      [0, -1, 0]           _*_*
                                     *‾**


                                     * _-
                                     *‾**
                                     *_-*
[2, 1, 1]       [2, 3, 4]            ‾***
Beginner, Novice, Extreme trails are distinguished by steepness of hills, dells and ramps. They do not differ in the way you should render them.
*/

/* function drawTrail(trail) {
  return [
    // solution for trail = [1, 0, 1, 0, 1, -1, 0, -1, -1]
    '     _    ',
    ' --‾‾ ‾‾--',
    '    _     ',
    '--‾‾ ‾‾-- ',
  ].join('\n');
}
 */

// a solution from codewars:
function drawTrail(trail) {
  // Step 1: Calculate sub-pixel heights (one full pixel = three sub-pixels)
  const subPixels = ((h) => trail.map((v) => (h += v)))(0);

  // Step 2: Convert each sub-pixel height into full pixel height + corresponding character
  const fullPixels = subPixels.map((h) => [
    Math.floor(h / 3),
    '_-‾'[((h % 3) + 3) % 3],
  ]);

  // Step 3: Paint the chars onto canvas.
  const yMin = Math.min(...fullPixels.map((c) => c[0]));
  const yMax = Math.max(...fullPixels.map((c) => c[0]));

  const canvasHeight = yMax - yMin + 3;
  const canvasWidth = trail.length + 1;

  const canvas = [...Array(canvasHeight)].map((_) =>
    Array(canvasWidth).fill(' ')
  );

  for (let x = 0; x < trail.length; ++x) {
    const [y, c] = fullPixels[x];

    canvas[y - yMin][x] = c;
    canvas[y - yMin + 2][x + 1] = c;
  }
  return canvas
    .reverse()
    .map((row) => row.join(''))
    .join('\n');
}

console.log(drawTrail([1, 0, 1, 0, 1, -1, 0, -1, -1]));
