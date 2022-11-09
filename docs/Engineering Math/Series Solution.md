## Power Series Solution

### Analytic
A function $f(x)$ is analytic at $x_0$ if $f(x)$ has a power series representation in some open intervals about $x_0$,  that is 

$$
\begin{gather}
f(x) = \sum_{n=0}^{\infty}{a_n\ (x-x_0)^n}
\quad \text{  for  } x \in (x_0-h, x_0+h)
\end{gather}
$$

where $a_n$ are the Taylor coefficients of $f(x)$ at $x_0$ : 

$$
\begin{gather}
a_n=\frac{1}{ n!}f^{(n)}(x_0)
\end{gather}
$$

## Frobenius Solutions

for second linear ODE

$$
\begin{gather}
P(x)y'' + Q(x)y' + R(x)y=F(x)
\\\\
\text{or}
\\\\
y''+p(x)y'+q(x)y=f(x)
\end{gather}
$$

### Ordinary Points
$x_0$ is an ordinary point if $P(x_0) \neq 0$, and $\frac{Q}{P}$, $\frac{R}{P}$, and $\frac{F}{P}$ are analytic at $x_0$.

### Singular Points
$x_0$ is a singular point if $x_0$ is not an ordinary point.

#### Regular Singular Points
$x_0$ is a regular singular point if $x_0$ is a singular point and the function $(x-x_0)\frac{Q}{P}$ and $(x-x_0)^2\frac{R}{P}$ are analytic at $x_0$.

#### Irregular Singular Points
A singular point $x_0$ is a irregular point if it's not a regular singular points.

---

### Frobenius Series

$$
\begin{gather}
y(x)=\sum_{n=0}^{\infty}{c_n(x-x_0)^{n+r}}
\end{gather}
$$

- r may be negative or even non-integer

- notice that

$$
\begin{gather}
y' = \sum_{n=\bf{0}}^{\infty}c_n(n+r)(x-x_0)^{n+r-1}
\end{gather}
$$

summation start from $n=0$ instead of $n=1$

### Frobenius Methods

the second order ODE 

$$
\begin{gather}
P\ y'' + Q\ y' + R\ y=F(x)
\end{gather}
$$

which $x_0$ is a [Regular Singular Points](#Regular%20Singular%20Points)

by solving it with 

$$y(x)=\sum_{n=0}^{\infty}{c_n(x-x_0)^{n+r}}$$

we can get two root $r_1, r_2$



- Case $|r_1-r_2| \notin ℕ$
	- 2 linearly independent Frobenius solutions
	- $y_1(x)=\sum{c_n(x-x_0)^{n+r_1}}$ 
	- $y_2(x) =\sum{c'_n(x-x_0)^{n+r_2}}$ 
	- $c_0,\  c'_0 \neq 0$
- Case  $r_1 = r_2$
	- 2 linearly independent Frobenius solutions
	- $y_1(x)=\sum{c_n(x-x_0)^{n+r_1}}$
	- $y_2(x) = y_1(x)\cdot \ln{(x)} + \sum{c'_n(x-x_0)^{n+r_1}}$
	- $c_0,\  c'_0 \neq 0$

- Case $|r_1 - r_2| \in ℕ$
	- $y_1(x)=\sum{c_n(x-x_0)^{n+r_1}}$ 
	- $y_2(x) = k\ y_1(x)\ \ln{(x)}+\sum{c'_n(x-x_0)^{n+r_2}}$
	- $c_0,\  c'_0 \neq 0$