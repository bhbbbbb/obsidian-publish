# Laplace Transform

## Definition

$$F(s) = L\big\{f(t)\big\} = \int_{0}^{\infty}{e^{-st}f(t)\ dt} 
$$

## The Laplace Transforms of Basic Functions

$\qquad f(t)\qquad$  | $\qquad F(s)\qquad$
:-----:|:---------:
$1$ |$1/s$
$t^n$ | $\frac{n!}{s^{n+1}}$
$\exp{(at)}$ | $\frac{1}{s-a}$
$t^ne^{at}$|$\frac{n!}{(s-a)^{n+1}}$
$\sin{(kt)}$ | $\frac{k}{s^2 + k^2}$
$\cos{(kt)}$ | $\frac{s}{s^2+k^2}$
$\sinh{(kt)}$ | $\frac{k}{s^2-k^2}$
$\cosh{(kt)}$ | $\frac{s}{s^2-k^2}$

## Constraints

+ constraint 1
	For a function $f(t)$, $\exists$ constant $c$, $M > 0$, and $T>0$
	s.t.
	$$|f(t)| \leq M\ e^{ct}, \ \forall \ t > T 
	$$
	
	$\rightarrow f(t)$ 不能跑得比 $\exp {(ct)}$ 快

+ constraint 2

	$f(t)$ should be piecewise continuous on $[0, \infty)$
	
	$\rightarrow\ \forall \ t \in [0, \infty)$,  $\quad f(t)$ 為 discontinuous 的點有限
	
note : these constraints are sufficient conditions


---

五大定理

## Five Theorem

### Transforms of Derivatives

$$
\begin{align}
L\big\{f'(t)\big\} &= \int_0^{\infty}{e^{-st}\ f'(t)\ dt} = \Bigg[e^{-st}\ f(t)\Bigg]^{\infty}_0 + s\ \int_0^{\infty}{e^{-st}\ f(t)\ dt} \\\\
&=sL\big\{f(t)\big\} - f(0)

\\\\\\

L\big\{f''(t)\big\} &= s^2\ F(s)-sf(0)-f'(0)

\\\\

L\big\{f'''(t)\big\} &= s^3F(s) - s^2f(0)-sf'(0)-f''(0)

\\\\
L\big\{f^{(n)}(t)\big\} &= s^nF(s)-s^{n-1}f(0) - s^{n-2}f'(0)-\dots -sf^{(n-2)}-f^{(n-1)}(0)

\end{align}
$$

---
### First Translation Theorem
translation for $s$
$$
L\big\{e^{at}\ f(t)\big\}=F(s-a)
$$

proof : 

$$
\begin{align}
L\big\{e^{at}\ f(t)\big\}&=\int_0^{\infty}{e^{-st}\ e^{at}\ f(t)\ dt} = \int_0^{\infty}{e^{-(s-a)t}\ f(t)\ dt} 
\\\\
&= F(s-a)
\end{align}
$$

---
### Second Translation Theorem
translation for $t$
$$
L\big\{f(t-a)\cdot u(t-a)\big\} = e^{-as}\ F(s)
$$
or
$$
L\big\{g(t)\ u(t-a)\big\}=e^{-as}\ L\big\{g(t+a)\big\}
$$

in which $u(t)$ is an [unit step function](minority/Step%20Function.md).

proof : 
$$
\begin{align}
L\big\{f(t-a)\ u(t-a)\big\} &= \int_0^{\infty}{e^{-st}\ f(t-a)\ u(t-a)\ dt}\\\\
&=\int_a^{\infty}{e^{-st}\ f(t-a)\ dt} 
\qquad (\text{let }t_1=t-a)\\\\
&= \int_0^{\infty}{e^{-s(t_1+a)}\ f(t_1)\ dt_1} = e^{-as}\ F(s)

\end{align}
$$


---

### Derivatives of Transforms

$$
L\big\{t^n\ f(t)\big\} = (-1)^n\ \frac{d^n}{ds^n}F(s)
$$

---

### Convolution

Definition :

$$
\begin{gather}
f(t)*g(t)=\int_{-\infty}^{\infty}{f(\tau)\ g(t-\tau)\ d\tau}
\end{gather}
$$

When  $f(t)=0$ for $t<0$ and $g(t)=0$ for  $t<0$

We have the same definition as below.

$$
\begin{gather}
f(t)*g(t)=\int_0^t{f(\tau)\ g(t-\tau)\ d\tau}
\end{gather}
$$

#### Convolution Theorem

$$
L\big\{f(t)*g(t)\big\}=F(s)\ G(s)
$$
---

#### Integration

from theorem above

$$
L\bigg\{\int_0^t{f(\tau)\ d\tau}\bigg\}=L\big\{f(t)*1\big\}=\frac{F(s)}{s}
$$

---

### Transform of a Periodic Function

When
$$f(t+T)=f(t)$$
then
$$
L\big\{f(t)\big\}=\frac{1}{1-e^{-sT}}\int_0^T{e^{-st}\ f(t)\ dt}
$$

$$
\begin{align}
\\\\
\frac{1}{1-e^{-sT}}
\end{align}
$$
來自無窮等比級數


### Dirac Delta Function

$$
\delta(t-t_0)= \Bigg\{
\begin{eqnarray}
\infty \quad \text{for}\ t=t_0\\
0 \quad \text{for}\ t\neq t_0
\end{eqnarray}
$$

#### Integration

$$\int_{-\infty}^{\infty}{\delta (t-t_0)\ dt}=1$$

#### Sifting

$$
\int_p^q{f(t)\ \delta (t-t_0)\ dt}=f(t_0)
$$


$$t_0 \in [p,q]$$

#### Laplace Transform

$$
L\big\{\delta (t-t_0)\big\}=e^{-t_0s
}
$$
$$
\text{when}\ t_0 >0
$$

proof : 
$$
\begin{align}
\because \ \delta(t-t_0)&=u'(t-t_0)\\\\
\therefore \ L\big\{\delta(t-t_0)\big\}&=sL\big\{u(t-t_0)\big\}-u(0)\\\\
\end{align}
$$
due to [second translation theorem](<#Second Translation Theorem>), we have

$$
\begin{align}
L\big\{\delta(t-t_0)\big\}=\frac{e^{-t_0s}}{s}\ s=e^{-t_0s}
\end{align}
$$

