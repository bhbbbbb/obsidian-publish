---
creation date: 2022/04/02 03:24
author: Smark Lin
---

## Workflow

We use [github flow](https://docs.github.com/en/get-started/quickstart/github-flow) in the future

- [mandarin tutorial](https://medium.com/@trylovetom/%E8%AE%93%E6%88%91%E5%80%91%E4%BE%86%E4%BA%86%E8%A7%A3-github-flow-%E5%90%A7-4144caf1f1bf)

To be brief, the only thing you have to know is

```shell
@at github: fork the repo 
git clone <your repo url>
cd <repo-dir>
## after y do something
git add . # stage all change
git commit -m "<Tell what y have done>" # commit
git push # push it to remote (github)

@at github: submit pull request
```

---


## Getting Start with Python Locally

### Virtual Environment (and for package management)
Without virtual environment, you are very likely to facing dependency error.

There are [Anaconda](https://www.anaconda.com/products/distribution) and [venv](https://docs.python.org/3/tutorial/venv.html) available. Please, choose one to use. My recommendation is anaconda, but this is just because I am only familiar with it.

There are plenty of tutorials on internet with traditional Chinese. Thus, go through then if u need them.

### IDE

VSCode is highly recommended, please install those helpful extension for python development. e.g. [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance), [autoDocstring](https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring)

---

## Typed Python

- [tutorial](https://myapollo.com.tw/zh-tw/python-typing-module/)

Adding type hint to your code is important for both u and your teammate.

for example

```python
def foo(arg1: int, arg2: str) -> Tuple[int, str]:
	do_some_thing ...
	return arg1, arg2
```

please implement **all** type hint in your code. However, in some case you can just ignore it.

```python
class Foo:
	@classmethod
	def a_classmethod(cls, arg: int):
		# cls is implict with type Foo, no need to specify
		pass
		
	def member_func(self, arg: int):
		# self is implict with type Foo, no need to specify
		do some thing ...
		return

def foo(*args, **kwargs):
	"""args and kwargs is implicitly the type 'tuple' and 'dict' respectively."""
	pass
```

Type hint is not guaranteed to check by interpreter at runtime. However, it is very important to programmer, since we can therefore get help by [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)

For example
```python
class Foo:
	
	name: str
	"""tell pylance there is an attribute 'name' with type 'str'"""
	
	def __init__(self, name: str):
		self.name = name
		return
	
	def say_hello(self) -> None:
		print(f"hello {self.name}")
```

```python
foo = Foo("world")	
print(foo.name) # pylance mark the 'name' as the color as 'variable'
>>> 'world'

print(foo.naem) # pylance do not mark the word 'naem' which tell you something may wrong.
>>> attribute error

print(foo.name.upper()) # pylance: Oh I know there is a method for the type 'str' called 'upper', hover your mouse on 'upper' to get the docs for upper if u need it.
>>> 'WORLD'
```

 Sometime, there may be some function that do not explicitly tell the return type. However, you can still tell pylance what the type is.
 
 ```python
output: Tensor = model(inputs)
# output is a Tensor no matter how the model(inputs) actually return
```

for the function returning tuple, there is two way to do explicit type hint.

```python
# wrong syntax
a: str, b: int = func_return_str_and_int()

# correct
from typing import Tuple
tem: Tuple[str, int] = func_return_str_and_int()
a, b = tem

# correct and recommanded
a, b = func_return_str_and_int()
a: str # do not thing but tell a is a string
b: int # do not thing but tell b is an int
```

大原則是讓 pylance 認得所有 literal ，一般而言 (variable, attribute, ...), function, (class and module) 會分別是一個顏色。如果有任何的「白字」（actually depend on theme）那就是代表有東西需要加上 type hint ，或是你寫錯了。

---

## Best Practice

### Reusing Structure

- bad example
```python
def deal_with_history(history):
	loss = history["train_loss"] # pylance: what is 'loss'?
	accuracy = history["train_accuracy"] # get attribute error this line
	pass

history = {
	"train_loss": 1.01,
	"train_acc": 0.99
}
deal_with_history(history)
```

You would not get or find error until runtime.

- Better Practice by [Namespace](https://docs.python.org/3/library/argparse.html#argparse.Namespace)

```python
from argparse import Namespace
class History(Namespace):
	train_loss: float
	train_acc: float


def deal_with_history(history: History):
	loss = history.train_loss # pylance: yes there is an attribute 'train_loss' for history with type 'float'
	accuracy = history.train_accuracy # pylance: what is 'train_accuracy' ?
	pass

history = History(train_loss = 1.01, train_acc = 0.99)
deal_with_history(history)
```

As you can see, the main advantage of using Typed Object (In this case, Namespace) is you can find error **right after** you type `history.train_accuracy`, rather than get an error until runtime.

Another typed structure for tuple is [`namedtuple`](https://docs.python.org/3/library/collections.html?highlight=namedtuple#collections.namedtuple), for dict is [`TypedDict`](https://docs.python.org/3/library/typing.html?highlight=typeddict#typing.TypedDict).

However, `Namespace` and `namedtuple` is more recommended.

The reason why `TypedDict` is not so recommended is TypedDict is work the same as the normal `dict` except for type hint. And as we know that we can only get attribute of  value by string from dict, and string sometime suppress warning to typo.

e.g.

```python
try:
	from typing import TypedDict # notice that this is for python 3.8 and after
except ImportError:
	from typing_extensions import TypedDict # use this for python < 3.8

class Image(TypeDict):
	color: str
	size: Tuple[int, int]

img = Image(color="blue", size=[100, 100])
print(img["size"]) # pylance: well... yes
print(img["colour"]) # pylance: well... yes (but get runtime error because no attribute called 'colour')
```


---

### Assertion

- see [official document](https://docs.python.org/3/reference/simple_stmts.html#the-assert-statement)

An example:

```python
def do_something(model: nn.Module, mode: Literal["train", "eval"]):
	assert mode in ["train", "eval"], f"expect mode is 'train' or 'eval', got {mode}"
```

Adding `assert` in your code appropriately tell other what exception u have concerned, and help others debug by a comprehensive message, instead of go through all your code.

I wrote this example above with `mode: Literal`. However, it may be a better idea to use ENUM. (google python ENUM)

```python
from enum import Enum, auto
class Mode(Enum):
    TRAIN = auto()
    EVAL = auto()
    VALID = EVAL # alias for EVAL
    INFERENCE = auto()

mode1 = Mode.TRAIN
mode2 = Mode.EVAL
print(mode1 is Mode.TRAIN)
>>> True
print(mode1 is mode2)
>>> False
print(mode2 is Mode.VALID)
>>> True

def do_something(model: nn.Module, mode: Mode):
	assert isinstance(mode, Mode), f"expect mode is an instance of Mode, got {type(mode)} however"
	pass
```

---
## Pylint

Pylint is lint for python. (Lint is a rule checker for code consistency.)

- [tutorial](https://pylint.pycqa.org/en/latest/tutorial.html)

Pylint is basic depend on the style guide [PEP8](https://peps.python.org/pep-0008/)

### Lint in terminal
in terminal, type

```shell
pylint <module_name or py_file.py>
```

pylint well calculate the score of  your code. like

```
Your code has been rated at 10.00/10 (previous run: 10.00/10, +0.00)
```

If you score is not 10/10, pylint would tell you why and where(in which file which line) make u lose score

for example

```
************* Module do
do.py:71:0: C0301: Line too long (113/100) (line-too-long)
do.py:18:8: W0612: Unused variable 'cat' (unused-variable)
do.py:25:8: W0612: Unused variable 'cat' (unused-variable)
do.py:33:8: W0612: Unused variable 'cat' (unused-variable)
do.py:50:0: C0413: Import "from nfnet.config import NfnetConfig" should be placed at the top of the module (wrong-import-position)
do.py:51:0: C0413: Import "from nfnet.nfnet_model_utils import NfnetModelUtils" should be placed at the top of the module (wrong-import-position)
do.py:69:8: W0612: Unused variable 'cat' (unused-variable)
do.py:5:0: W0611: Unused FatLeNet5 imported from imgclf.models (unused-import)
do.py:5:0: W0611: Unused FakeVGG16 imported from imgclf.models (unused-import)
do.py:7:0: W0611: Unused Hw2Config imported from hw2.config (unused-import)
do.py:8:0: W0611: Unused AlexNet imported from imgclf.models.models (unused-import)
do.py:8:0: C0412: Imports from package imgclf are not grouped (ungrouped-imports)

------------------------------------------------------------------
Your code has been rated at 8.03/10 (previous run: 8.03/10, +0.00)
```

We accept only **10/10** score for every commit, and you may not want to solve plenty of issue at once.

Thus, considering enable pylint in vscode. 

### Enable Pylint in VSCode

1. `control` + `shift` + `p` (`cmd` + `shift` + `p` for Mac) calling command palette
2. type `python: lint` in the input box
3. choose `Python: Select Linter` and choose `pylint`
4. redo 1. and 2.
5. choose `Python: Enable/Disable Linting` and choose `enable`

### Handling Pylint Error/Warning/...

If you get a message and you don't know how to solve it. Find document for messages here https://pylint.pycqa.org/en/latest/messages/messages_list.html

or just google (or ask me or other teammates).


### Common Mistake

#### Naming Style

It is important to keep ur naming style consistent, and here is our naming style for different classes.

- snake_case
	- variable
	- module
	- method

- PascalCase
	- class name
	- Type name

- UPERR_CASE
	- constant (In Python constant is not real constant (in-redefinable) however, it is a good practice to name a variable with UPPER_CASE to tell other that variable should be treated as a constant)


---

#### Docs

Please add doc-string to every methods/function/module/class unless the methods/function/module/class is just a simple wrapping or it is self-explaining enough.

- In Python, we normally use [google type docstirngs](https://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_google.html) (you can handle this easily by the extension [autoDocstring](https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring))


---

#### line-to-long

Line limit is set to 100, please refactor the long line.

- For long if conditions, use

```python
if (
    very_long_variable_name is not None
    and very_long_variable_name.field > 0
    or very_long_variable_name.is_debug
):
```

- For long string, use implicit string concatenating syntax

```python
a_long_string = (
	"this is a long long sting"
	"this is the second line"
	"notice that this is all in the same line"
)
```

for others, use back splash `\`

```python
def abs(somehow_this_is_a_long_variable: int):
	res = somehow_this_is_a_long_variable if\
			somehow_this_is_a_long_variable > 0\
			else -1 * somehow_this_is_a_long_variable
	return res
```

---
<!---
### import-error

Sometime, pylint cannot find third party module for some reason.

```
imgclf\dataset.py:10:0: E0401: Unable to import 'torch' (import-error)
```

- solution

```ini
[TYPECHECK]
ignored-modules=torch
```
---

-->


### inconsistent-quotes

using double quotes `""` for string, notice that the single quote is still acceptable in the double-quote string.

E.g.
```python
a_str = "this is an inside 'single' quote" # accepted
b_str = 'string with outer single quote' # not accetped
```

#### Import outside toplevel

The import syntax should be on the top of file. Thus solving path issue by `sys.append(...` is not acceptable in modules.

#### wrong-import-order

Import should respect the order _standard imports first, then third-party libraries, then local imports_

```python
# ok
import os # standard module
import torch # third party module
import .my_module # local module

# wrong
import os
import .my_module
import torch
```

beside, always use `from ___ import ___` if you can

```python
# wrong
import torch.nn as nn

# ok
from torch import nn
```