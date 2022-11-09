

## homogeneous Equations

### Definition

$$a_n(x)\frac{d^ny}{dx^n}+a_{n-1}(x)\frac{d^{n-1}y}{dx^{n-1}}+\dots + a_1(x)\frac{dy}{dx}+a_0(x)y=g(x)$$

or be written as

$$a_n(x)D^n + a_{n-1}(x)D^{n-1}+\dots +a_1(x)D + a_0(x)y=g(x)$$

+ $g(x) = 0 \qquad  \rightarrow \quad$ homogeneous
+ $g(x) \neq 0 \qquad \rightarrow \quad$ non-homogeneous

---

### General Solution (Complementary Function)

+ Theorem 4.1.5

	For an n<sup>th</sup> order homogeneous liner DE $L(y) = 0$, if
	
	1. $y_1(t), y_2(t), \dots , y_n(t)$ are the solution to $L(y) = 0$
	2. $y_1(t), y_2(t), \dots , y_n(t)$ are **linearly independent**
	<br>
	+ Determinate whether they are liner independent : [Wronskian](minority/Wronskian.md).

+ Expression

	Any solution of the homogeneous liner DE can be expressed as 
	
	$$y=c_1y_1 + c_2y_2 + \dots + c_ny_n$$
	
+ Any n<sup>th</sup> order homogeneous linear DE has **n** linearly independent solutions.

+ fundamental set of solutions
	
	$$y_1(t), y_2(t), \dots , y_n(t)$$
	
+ general solution (aka **complementary function**)

$$y=c_1y_1 + c_2y_2 + \dots + c_ny_n$$


---
### 2nd with an known solution
2<sup>nd</sup> order linear homogeneous DE with an known solution

$$a_2(x)y''+a_1(x)y'+a_0(x)y=0$$

By virtue of solution below, we can get another solution and therefore get [complementary function](<#General Solution (Complementary Function)>).

#### Conditions
1. second order
2. linear 
3. homogeneous
4. one of the nontrivial solution $y_1(x)$ has been known
 	
 #### Standard Form

$$y''+P(x)y'+Q(x)y=0$$
	
#### Solution 
(直接背！！！)

$$y_2(x) = y_1(x) \int{\frac{e^{-\int P(x)dx}}{y_1^2(x)}dx}$$

see [proof](proof). (TODO)
	
---
	
### Linear DE with Constant Coefficients

Homogeneous linear DE with constant coefficients

$$a_ny^{(n)}(x) + a_{n-1}y^{(n-1)}(x) + \dots + a_1y'(x) + a_0y= 0$$


#### Condition
1. homogeneous
2. linear
3. constant coefficients


#### kernel concept
Suppose the solutions has the form of $e^{mx}$

	
#### Auxiliary Function

change $y^{(n)}$ into $m^n$

$$a_nm^n+a_{n-1}m^{n-1}+\dots + a_1m+a_0=0$$
	

solve $m$.


#### Solution to 2nd Order

$$
\begin{gather}
a_2y''(x) + a_1y'(x) + a_0y(x) = 0\\
\downarrow \\
a_2 m^2 + a_1 m + a_0 = 0
\end{gather}
$$

+ Case 1 : $m_1 \neq m_2, \quad m_1, m_2 \in ℝ$, (D > 0)

	$$m_1, m_2 = \frac{-a_1 \pm \sqrt{a_1^2-4a_2a_0}}{2a_2}$$

	thus

	$$y = c_1e^{m_1x} + c_2e^{m_2x}$$
	
	if
	
	$$
	m_1, m_2 = \alpha \ \pm \ \beta
	$$
	
	we can also write
	
	$$
	y=e^{\alpha x}(c_1\cosh{\beta x} + c_2\sinh{\beta x})
	$$

	

<br>

+ Case 2 $m_1 = m_2$, (D = 0)

	$$y_1 = e^{m_1x}$$

	$y_2$ can be find by the [method](<#2nd with an known solution#Solution>) mentioned above.
	
	then we found that
	
	$$y_2 = x\ e^{m_1x}$$
	
	<br>
	
+ Case 3 $m_1 \neq m_2$, $m_1$ and $m_2$ are conjugate(共軛) and complex, (D < 0)

	$$
	\begin{gather}
	m_1 = \alpha + i\beta \qquad m_2 = \alpha - i\beta \\
	\\
	\alpha = -\frac{a_1}{2a_2}, \qquad \beta = \frac{\sqrt{4a_2a_0 - a_1^2}}{2a_2}
	\end{gather}
	$$
	
	thus
	
	$$
	\begin{gather}
	y = C_1e^{\alpha x + i\beta x} + C_2 e^{\alpha x - i\beta x}
	\end{gather}
	$$
	
	another form : [proof](minority/proof2.md)
	
	$$y = e^{\alpha x}(c_1 \cos{\beta x} + c_2 \sin{\beta x})$$
	
	
---
	

	
#### Solution to Higher Order
	
n<sup>th</sup> order ODE
	
$p, q \in [1, n], \quad \text{and} \quad p \neq q$
	
+ Case 1 :  $m_p \neq m_q$
	都是獨立解
		
+ Case 2 : 有重根 (在$m_p$處重根 k 個)

	solution : $\quad e^{m_px},\quad x\cdot e^{m_px},\quad x^2\cdot e^{m_px}, \dots ,\quad x^{k-1}\cdot e^{m_px}$
		
+ Case 3 : 有k對複數解

	solutions :
	
	$$
	\begin{align}
	e^{\alpha x} \cos(\beta x),\quad xe^{\alpha x} \cos(\beta x),\quad x^2e^{\alpha x} \cos(\beta x),\dots , x^{k-1}e^{\alpha x}\cos (\beta x) \\\\
	e^{\alpha x} \sin(\beta x),\quad xe^{\alpha x} \sin(\beta x),\quad x^2e^{\alpha x} \sin(\beta x),\dots , x^{k-1}e^{\alpha x}\sin (\beta x) 
	\end{align}
	$$
	

	---
	
### Cauchy-Euler Equation

Cauchy-Euler Equation is homogeneous linear DE in the form below

$$a_n x^n y^{(n)}(x) + a_{n-1}x^{n-1}y^{(n-1)}(x) + \dots + a_1 xy'(x) + a_0y(x) = g(x)
$$


#### Kernel Concept
guess the solution has the form $y(x) = x^m$
	
then we can change $x^k\ \frac{d^k}{dx^k}$ to $\frac{m!}{(m-k)!}$

---
#### Solution to 2nd Order

$$a_2x^2y''(x) + a_1xy'(x) + a_0y = 0$$

+ auxiliary function :

	$$
	\begin{align}
	a_2m(m-1) &+ a_1m &+ a_0 &= 0\\\\
	a_2m^2 &+ (a_1 - a_2)m &+ a_0 &= 0
	\end{align}
	$$

than solve roots with 

$$
\begin{align}
m = \frac{-b \pm \sqrt{D}}{2a}
\end{align}
$$

<br>

+ Case 1 : ( $m_1 \neq m_2, \quad m_1, m_2 \in ℝ$ )
	
	$$y_c = c_1x^{m_1} + c_2 x^{m_2}$$
	
+ Case 2 : ( $m_1 = m_2$ )

	use the [method](<#2nd with an known solution#Solution>) of reduction of order
	
	$$y_2(x) = y_1(x) \int{\frac{e^{-\int P(x)dx}}{y_1^2(x)}dx}$$
	
	
	
	>
	>$$y_1(x) = x^{m_1}$$
	>
	>
	>$$y_2(x) = x^{m_1} \cdot \ln{|x|}$$
	>
	直接背結論 $\uparrow$
	
+ Case 3 : ( $D < 0$ )

	$$m_1 = \alpha + i\beta, \qquad m_2 = \alpha - i\beta$$
	
	直接背
	>
	>$$y_c = x^{\alpha}\big[c_1\cos{(\beta \ln x)} + c_2 \sin{(\beta \ln x)}\big]$$
	>
---

#### Solution to Higher Order

+ Case 1 : 皆唯一解
	
	$$x^{m_p}$$
	
+ Case 2 : 在$m_p$處有 $k$ 個重根

	$$x^{m_0}, \quad x^{m_0}\ln x,\quad x^{m_0}\cdot (\ln x)^2, \dots ,\quad x^{m_0}\cdot (\ln x)^{k-1} $$
	
+ Case 3 : 有一對複數根

	$$x^{\alpha}\cos{(\beta \ln x)}, \quad x^{\alpha}\sin{(\beta \ln x)}
	$$
	
+ Case 4 : 有 $k$ 對複數解
	
	$$
	\begin{align}
	x^{\alpha}\cos{(\beta \ln x)}, \quad x^{\alpha}\cos{(\beta \ln x)} \cdot \ln x \ , \dots,\ x^{\alpha}\cos{(\beta \ln x)}\cdot (\ln x)^{k-1}
	\\\\
	x^{\alpha}\sin{(\beta \ln x)}, \quad x^{\alpha}\sin{(\beta \ln x)}\cdot \ln x\ , \dots,\  x^{\alpha}\sin{(\beta \ln x)}\cdot (\ln x)^{k-1}
	\end{align}
	$$

---

## Non-homogeneous Equations

### Concept

we can solve any non-homogeneous equations by 

$$ y = y_c + y_p$$

in which $y_c$ is the complementary function and $y_p$ is the particular solution to equation.


---

### Linear DE with Constant Coefficients

#### Condition

1. linear
2. constant coefficient
3. $g^{(k)} \quad (k \in ℕ )$ contain finite number of terms.[^1]

[^1]: $y_p$ should be a linear combination of 
    
    $$g(x), \ g'(x), \  g''(x), \  g'''(x), \dots$$
    
    therefore, we won't get any redundant term.

#### Solution
		
Trial particular solutions

$g(x)$ | Form of $y_p$
-----|-------------
$\text{const}\qquad \qquad$ | $A$
$5x + 7$ | $Ax + B$
$3x^2 - 2$ | $Ax^2 + Bx + C$
$x^3 - x + 1$ | $Ax^3 + Bx^2 + Cx + D$
$\sin{4x}$ | $A\cos{4x} + B\sin{4x}$
$\cos{2x}$ | $A\cos{2x} + B\sin{2x}$
$e^{5x}$ | $Ae^{5x}$
$(9x - 2)e^{5x}$ | $(Ax + B)\ e^{5x}$
$x^2 e^{5x}$ | $(Ax^2 + Bx + C) \  e^{5x}$
$x\ e^{3x}\sin{4x}$ | $(Ax + B)\ e^{3x}\ \cos{4x} + (Cx + D)\ e^{3x}\ \sin{4x}$

---
e.g.  

$$g(x) = e^{2x} + xe^{3x}$$

$$
\begin{align}\\
& y_{p_1} = A\ e^{2x} & y_{p_2} = (Bx+C)\ e^{3x}\\\\
\end{align}
$$


$$y_p = y_{p_1} + y_{p_2} = A\ e^{2x} + (Bx+C)\ e^{3x}$$



#### Glitch

+ Condition 1 : 
	particular cannot belong to complementary function.
	
	e.g. 
	
	$$y'' -5y' +4y= 8e^x$$
	
	complementary function :  
	
	$$ y_c = c_1e^x + c_2e^{4x}$$
	
	$$
	\begin{gather}
	\because Ae^{x} \in y_c 
	\end{gather}
	$$
	
	therefore we guess the particular solution with an extra $x$.
	
	$$y_p = Axe^x$$
	
	
+ Condition2 : 
	
	$$g(x), \ g'(x), \  g''(x), \  g'''(x), \dots$$
	
	can only contain infinite number of terms.
	
	
	
### Any Linear DE

$$a_n(x)y^{(n)}(x) + a_{n-1}(x)y^{(n-1)}+\dots + a_1(x)y'(x) + a_0(x)y=g(x)
$$


#### Variation of Parameters
Solution to 2nd Order

$$a_2(x)y''(x) + a_1(x)y'(x) + a_0(x)y(x) = g(x)$$

or in the form

$$
y''(x)+P(x)y'+Q(x)y=f(x)
$$

Suppose the complementary function is 

$$c_1y_1(x) + c_2y_2(x)$$


then assume particular solution as

$$y_p=u_1(x)\ y_1(x)+u_2(x)\ y_2(x)$$

and then we can get

$$
\Bigg\{
\begin{eqnarray}
y_1u_1' + y_2u_2' &= 0\\
y_1'u_1' + y_2'u_2' &= f(x)
\end{eqnarray}
$$

$$
\begin{align}
\\u_1'= \frac{W_1}{W} & \qquad & u_1= \int{u_1dx}
\\u_2' = \frac{W_2}{W} & & u_2 = \int{u_2dx}
\end{align}
$$

in which

$$
\begin{align}
W = \text{Wronskian} &=
\begin{vmatrix}
y_1 & y_2 \\
y_1' & y_2' \\
\end{vmatrix}
\\\\
W_1 &= 
\begin{vmatrix}
0 & y_2 \\
f(x) & y_2'
\end{vmatrix}
\\\\
W_2 &=
\begin{vmatrix}
y_1 & 0\\
y_1' & f(x)
\end{vmatrix}
\end{align}
$$

ref : [Wronskian](minority/Wronskian.md)

#### Higher Order

similar to the way above.