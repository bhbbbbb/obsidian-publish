# Heat Equation

- 1-D heat equation
$$
\begin{gather}
\frac{\partial U}{\partial t} = k \frac{\partial^{2}U}{\partial x^{2}}
\end{gather}
$$


- 3-D heat equation
$$
\begin{gather}
\frac{\partial U}{\partial t} = k( \frac{\partial^{2}U}{\partial x^{2}}+\frac{\partial^{2}U}{\partial y^{2}}
+\frac{\partial^{2}U}{\partial z^{2}})
\end{gather}
$$

## Principle


- 沒微分兩端固定 → $\sin$
- 兩端固定一次微分等於0 → $\cos$

## Finite Medium

take
$$
\begin{gather}
U(x, 0) = f(x)
\\\\
U_{t}(x, 0)  = g(x)
\\\\
X'' + \lambda X = 0
\\\\
T' + \lambda k T = 0
\end{gather}
$$

### 沒微分兩端固定 = 0

- 沒微分兩端固定 → $\sin$
- $U(0, t) = U(L, t) = 0$
$$
\begin{align}
&\lambda_{n}  = \frac{n^{2}\pi^{2}}{L^{2}} & n=1, 2, 3 , \dots
\end{align}
$$

$$
\begin{gather}
X_{n} = \sin(\sqrt{\lambda_{n}}x)
\\\\
T_{n} = c_{n}e^{-\lambda t}
\end{gather}
$$

$$
\begin{gather}
c_{n} = \frac{2}{L}\int_{0}^{L}{f(x)\sin(\sqrt\lambda x)dx}
\\\\
U(x, t) = \sum{c_{n}\sin(\sqrt{\lambda }x)\ e^{^{-k\lambda t}}}
\end{gather}
$$

### 兩端固定一次微分等於0
- 兩端固定一次微分等於0 → $\cos$
- $U_{x}(0, t) = U_{x}(L, t) = 0$


$$
\begin{align}
&\lambda_{n}  = \frac{n^{2}\pi^{2}}{L^{2}} & n=0, 1, 2, 3 , \dots
\end{align}
$$
$$
\begin{gather}
X_{n} = \cos(\sqrt{\lambda_{n}}x)
\\\\
T_{n} = c_{n}e^{-\lambda t}
\\\\
c_{n} = \frac{2}{L}\int_{0}^{L}{f(x)\cos(\sqrt{\lambda}x)dx}
\\\\
U(x, t) = \frac{1}{2}c_{0} + \sum_{n=1}^{\infty}{c_{n}\cos(\sqrt{\lambda}x)\ e^{-k\lambda t}}
\end{gather}
$$

---

### 有 A

- $U(0, t) = 0; \quad U_{x}(L, t) = -AU(L, t)$


- 用作圖解 $\tan(\alpha L) = -\frac{\alpha}{A}$, 令解為 $A_{1}, A_{2}, \dots$

- 解 case 3 (case 1, case 2 are trivial)

- $$f(x) = \sum_{n=1}^{\infty}{c_{n}\sin(\sqrt{\lambda}x)}$$
- $$c_{n} = \frac{(f(x), \sin(\sqrt{\lambda}x))}{||\sin(\sqrt{\lambda}x)||}$$

- 參考 [Eigenfunction expansion](Sturm-Liouville%20problem#Eigenfunction%20expansion)

- $$
\begin{gather}
U(x, t) = \sum_{n=1}^{\infty}{c_{n}\sin(\sqrt{\lambda}x)e^{-k\lambda t}}
\end{gather}
$$

---

### 兩端固定不為 0

- $U(0, t) = T_{1}, \quad U(L, t) = T_{2}$

- Set $U(x, t) = u(x, t) + \phi(x)$
 - Then $u_{t} = k(u_{xx}+\phi''(x))$
- Try let $\phi''(x) = 0$

- solve $u(x, t)$

----

### 有外力
- $U_{t} = k U_{xx}+F(x, t)$
- 且兩端固定為 0

- $U(x, t) =$ 外力修正 + 沒外力解

- $$B_{n}(t) = \frac{2}{L}\int_{0}^{L}{F(x, t)\sin(\sqrt{\lambda}x)dx}$$

- $$
\begin{gather}
b_{n} = \int_{0}^{t}{e^{-k\lambda (t-\tau)}B_{n}(\tau)\ d\tau}
\end{gather}
$$

- $$
\begin{gather}
U(x, t) = \sum_{n=1}^{\infty}{b_{n}\sin(\sqrt{\lambda_{n}}x)}+ \sum_{n=1}^{\infty}{c_{n}\sin{\sqrt{\lambda_{n}}}\ e^{-k\lambda_{n}t}}
\end{gather}
$$

## Infinite Media

- $$
\begin{gather}
\lambda_{n} = \omega^{2}
\end{gather}
$$

- $$
\begin{gather}
U(x, t) = \int_{o}^{\infty}{[a_{\omega}\cos(\omega x)+b_\omega \sin(\omega x)]e^{-k\omega^{2}t}\ d\omega}
\\\\
a_{\omega} = \frac{1}{\pi} \int_{-\infty}^{\infty}{f(x)\cos(\omega x) dx}
\\\\
b_{\omega} = \frac{1}{\pi}\int_{-\infty}^{\infty}{f(x)\sin(\omega x)dx}
\end{gather}
$$

### Half infinite Media

- $x \in (0, \infty)$


