![cf](http://i.imgur.com/7v5ASc8.png) lab 04 Bitmap Transform
====

## To Submit this Assignment
* have team leader fork this repository
* have team leader add team members as collaborators to the team fork
* team members should clone team fork
* write all of your code in a directory name `bitmap-` + `<team name>` **e.g.** `bitmap-shredders`
* submit a pull request to this repository when done :)
* each person will submit a link to your to your PR in canvas
* each person will write up about what work they did on the project
* each person write a question and observation on canvas

## Description
For this assignment you will be building a Bitmap reader and transformer. It will read a Bitmap in from disk, run one or more color transforms on the bitmap and then write it out to a new file. This project will require the use of node buffers in order to manipulate binary data. Your project should include a package.json file, eslintrc, README.md, and a .gitignore. Make sure to run all your code through eslint. The process will look something like this:

1. open file using fs and read it into a buffer
2. convert buffer headers data into a Javascript Object (using constructors)
3. Run a transform on the buffer directly
4. Write the buffer to a new file.

The wikipedia article found here [Bitmap Specification](https://en.wikipedia.org/wiki/BMP_file_format) describes the byte specification of a "windows bitmap file." We'll be working the simplest version, meaning no compression.

* Your project should have three transforms
  * Invert the colors (essentially subtract every color value from the max color value which is 255),
  * Grayscale the colors - Google it.
  * (red|green|blue)scale the colors, same as above but only multiply one of the colors.

## Other notes
- will be working with an 8-bit bitmap
- bitmap header 14 bytes
- dib header 40 bytes
- color table 1024 bytes
- pixel array 1 byte per pixel of file

## Bonus Points:

* Can handle palette and non-palette bitmaps
* Can handle multiple types of bitmaps (not just BM)
* Handle LE and BE computers with a single if statement
* create a command line interface
* command line interface that can select the transform
* can handle various sized bitmaps

#### Rubric:
* Tests: 3pts // freebee
* Package.json 2pts
* Read Bitmap Meta Data 5pts
* Successfully Apply Transform 5pts
* Project Design 5pts
