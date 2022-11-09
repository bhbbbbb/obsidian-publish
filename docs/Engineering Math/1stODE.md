
## Separable Variable Method
for any ODE satisfying

$$
\frac{dy}{dx}=g(x)h(y)
$$

---

## linear Equation

<br>

### standard form

$$y'+P(x)y=f(x)$$

---

### integrating factor

$$
M(x)=e^{\int{P(x)dx}}
$$

---



### solving method

1. standard form
    
    $$y'+Py=f$$
    
1. multiple M(x)
    
    $$y'⋅M+P⋅My=f⋅M$$
    
1. notice that  

    $$M'=P⋅M$$
    
1. thus (form 2.)
    
    $$M\cdot y'+M'\cdot y=M\cdot f$$
    
1. according to product rule
    
    $$\frac{d}{dx}(M\cdot y)=M\cdot f$$
    
1. integrate both sides
    
    $$M\cdot y = \int{M\cdot f dx} + c$$
    
1. check initial value and **singular points** [^1]

[^1]: singular points

    > $\forall x$  s.t.
    > 
    > $$P(x)\rightarrow \infty \quad \text{or} \quad f(x) \rightarrow \infty$$
    > 
    singular points cannot be solution.


---

## Exact Equation

Any 1<sup>st</sup> ODE can be written as

$$M(x, y)dx+N(x, y)dy=0$$

If $\exists f(x, y)$, s.t.

$$df(x,y)=\frac{∂f(x,y)}{∂x}dx+\frac{\partial f(x,y)}{∂y}dy=0$$

which means

>
>$$\frac{∂f(x, y)}{∂x}=M(x, y)$$
>
>$$\text{and}$$
>
>$$\frac{∂f(x, y)}{∂x}=N(x, y)$$
>

, then

$$M(x, y)dx+N(x, y)dy=0$$

is an **Exact Equation**.

---
for an exact equation

$$M(x, y)dx+N(x, y)dy=0$$

due to

$$df(x,y)=\frac{∂f(x,y)}{∂x}dx+\frac{\partial f(x,y)}{∂y}dy=0$$

we know that

$$
f(x,y) = c
$$

---


### solution to exact equation

$$M(x, y)dx+N(x, y)dy=0$$

1. check the 1<sup>st</sup> ODE is exact equation

	$$\frac{∂M}{∂y}=\frac{∂N}{∂x}=\frac{∂f}{∂x∂y}$$
	
	
2. then

	$$f(x,y) = \int{M\cdot dx} + g(y)$$
	
3. and we can get $g(y)$ by
	
	$$\frac{\partial}{\partial y}f(x,y)=N(x, y)$$
	
4. solve

	$$f(x, y)=c$$
	
---
	
### modify non-exact equations to exact equations

given a 1<sup>st</sup> ODE which isn't exact equation

$$M(x,y)dx+N(x,y)dy=0$$

meaning

$$\frac{∂M}{∂y}\neq \frac{∂N}{∂x}$$

we can try to find an integrating factor $\mu$ s.t.

$$
\mu M dx + \mu N dy = 0
$$

is an exact equation.

<br>

check if this equation satisfy either

1.
	> 
	> $$h(y)=\frac{N_x-M_y}{M}$$
	> 
	> is independent to $x$. (dependent to $y$ alone)

or

2.
	> 
	> $$h(x)=\frac{M_y-N_x}{N}$$
	> 
	> is independent to $y$. (dependent to $x$ alone)


if neither of these condition were satisfied, the equation cannot be exact equation.

otherwise, the equation can be multiplied by $\mu$ to become **exact equation**, and solve by the [method](#solution+to+exact+equation) mentioned above.

1. 
	> 
	> $$\mu(y)=e^{\int {h(y)dy}}$$
	> 

or

2. 
	> 
	> $$\mu(x)=e^{\int {h(x)dx}}$$
	> 

see [proof](minority/Proof%20to%20Modified%20EE.md).


## homogeneous Equation

There are two different definition of homogeneous equation.

### homogeneous Linear Equation

The constant term of linear Equation is zero
	
In 1<sup>st</sup> ODE case
	
$$y'+P(x)y=f(x)$$
	
The equation is homogeneous if f(x) = 0

see [further definition](Higher%20Order%20DE#homogeneous%20Equations).

### homogeneous 1st ODE

以下兩種定義等價。

+ **ODE in $y' = f(x,y)$ form**

	The equation is homogeneous if 
		
	$$y'=f(x,y)=f(tx,ty)$$

+ **ODE in $Mdx + Ndy = 0$ form**

	If $M(x,y)$ and $N(x,y)$ are homogeneous functions of **the same degree**, then the 1<sup>st</sup> ODE is [homogeneous](minority/Homogeneous%20Function.md).
		
	


<br>

**Quick Check Guide** : sum of powers (指數之和)

<br>

### Solution to 1st ODE

Set $y=ux$, $dy = udx +xdu$,

then use [separable variable method](#Separable+Variable+Method)

---

## Bernoulli's Equations

aka 白努力 equation

### standard form

$$y'+P(x)y=f(x)\cdot y^n$$

### Solution

Assume

$$u=y^{1-n}$$

according to chain rule, we can write

$$\frac{dy}{dx}=\frac{1}{1-n} u^{\frac{n}{1-n}} \frac{du}{dx}$$

代入 standard form

$$
\begin{align}
\frac{1}{1-n} u^{\frac{n}{1-n}} \frac{du}{dx} &+ P(x)\cdot u^{\frac{1}{1-n}} &= f(x)\cdot u^{\frac{n}{1-n}}
\\
\frac{du}{dx} &+ P(x)(1-n)\cdot u &= (1-n)f(x)
\end{align}
$$


then use the [method](#solving+method) of solving linear 1<sup>st</sup> ODE.

---

## Ax + By + C
If the 1<sup>st</sup> ODE has the form

$$\frac{dy}{dx} = f(Ax+By+C),\quad (B\neq 0)$$

set $u=Ax+By+C$

then

$$
\begin{gather}
du = Adx + Bdy\\
\downarrow\\
\frac{dy}{dx} = \frac{1}{B}\frac{du}{dx}-\frac{A}{B}\\
\downarrow\\
\frac{1}{B}\frac{du}{dx}-\frac{A}{B}=f(u)
\end{gather}
$$

and solve it by any method above.