# squeakyJS

## INTRODUCTION

This is a Squeak like implementation of the class system in JavaScript.
It supports inheritance of classes, access to superclass methods and
class-side methods.

## GETTING STARTED

	Foo = Class({
		superClass: Bar,

		instanceVariables: ['a', 'b', 'c'],

		instanceMethods: {
			// initalize method is called after instanciation
			initialize: function() {
				alert('foobar');
			},
			// further methods
		},

		classVariables: ['d', 'e', 'f'],

		classMethods: {
			name: function() {
				this._block(function() { return "This is a non local return"; });
				
				// this part should never be executed
				return 'Foo';
			}
		}
	});

	inst = Foo._new()


Every parameter is optional. To get more familiar, please try out
the examples.

## CONTACT

For further questions feel free to contact me under
robert.strobl _at_ gloriabyte.de