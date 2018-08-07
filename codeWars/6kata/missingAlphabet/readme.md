#Missing Alphabet

##What is the problem asking for?

1.  Take in a string (characters will be all lowercase)
2.  Return new string consisting of old string processed in a certain way:

for each character, if it is the first time seeing that character, append all alphabetical letters:

1.  AFTER the current letter alphabetically
2.  NOT in the original string

Additional Requirements:

1.  Each added letter should be uppercase
2.  Letters in the original string should remain lowercase

Example:

input: "holly"
output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"
