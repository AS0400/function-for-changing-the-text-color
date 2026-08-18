in the first method we use a normal for loop to iterate over the nodelist.
then we select the button.
when the button is clicked, the for loop starts from index 0.
the loop continues until the index reaches the total number of paragraphs.
inside the loop we access the current paragraph using paragraphs[i].

in the second method we use foreach instead of a normal for loop.
first we again select all <p> elements using querySelectorAll().
then we attach a click event listener to the button.
when the button is clicked, foreach automatically goes through each paragraph in the nodelist.
we do not need to manually create an index or check .length.
the current paragraph is directly available through the callback parameter.

in the third method we do not directly set the color from JavaScript.
instead, we create a css class that contains the styling.
first we create a class called blue-text in the css file.
then we select all the paragraphs and the button.
when the button is clicked, we use foreach to go through every paragraph.
the toggle method checks whether the class already exists.
if the class does not exist, it adds the class.
if the class already exists, it removes the class.
therefore the same button can be used to turn the blue color on and off.






