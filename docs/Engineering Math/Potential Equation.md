# Potential Equation

- Laplace's Equation

$$
\begin{align}
&\nabla^{2} U=0
\\\\
&\frac{\partial^{2} U}{\partial x^{2}}+\frac{\partial^2 U}{\partial y^{2}} =0 & \text{2D}
\\\\
&\frac{\partial^{2} U}{\partial x^{2}}+\frac{\partial^2 U}{\partial y^{2}}+\frac{\partial^2 U}{\partial z^{2}}=0 & \text{3D}
\end{align}
$$


## 2D Laplaces's Equation

### Polar Coordinate

- $$z(x, y) = z(r\cos{\theta}, r\sin{\theta})=U(r, \theta)$$

 - $$\frac{d(\tan^{-1}(u))}{du} = \frac{1}{1+u^{2}}$$


- $$
\begin{gather}
\nabla^{2}z=U_{rr}+\frac{1}{r}U_{r}+\frac{1}{r^{2}}U_{\theta\theta}
\end{gather}
$$

### Cylindrical Coordinate

- $$V(x, y, z) = V(r\cos{\theta}, r\sin{\theta}, z) = U(r, \theta, z)$$

- $$
\begin{gather}
\nabla^{2}=U_{rr}+\frac{1}{r}U_{r}+\frac{1}{r^{2}}U_{\theta\theta}+U_{zz}
\end{gather}
$$


### Spherical Coordinate

- $$
\begin{gather}
x = \rho \cos(\theta)\sin(\phi)
\\\\
y = \rho \sin(\theta)\sin(\phi)
\\\\
z= \rho \cos(\phi)
\end{gather}
$$


- $$
\begin{gather}
\nabla^{2}V = U_{\rho\rho}+\frac{2}{\rho}U_{\rho}+\frac{1}{\rho^{2}\sin\phi}U_{\theta\theta}+\frac{1}{\rho^{2}}U_{\phi\phi}+\frac{\cot\phi}{\rho^{2}}U_{\phi}
\end{gather}
$$

---

## Dirichlet Problem

### Rectangle

$$
\begin{gather}
\nabla^{2}U(x,y) = 0
\end{gather}
$$

- 一次只能解一個邊不為 0 的 case
- 若有兩個邊以上不為 0 ，分成若干子問題來解
- $u(x, y) = u_{1}(x, y) + u_{2}(x, t) + \dots$


### Disk

$$
\begin{gather}
\nabla^{2}U(r\cos\theta, r\sin\theta) = 0
\end{gather}
$$

- [Cauchy-Euler Equation](Higher%20Order%20DE.md#Cauchy-Euler+Equation#Solution+to+2nd+Order)


let

$$u(r, \theta) = P(r)\ Q(\theta)$$

then

$$
\begin{align}
& Q'' + \lambda Q = 0 & \#1 \ ODE
\\\\
& r^{2}P'' + rP' - P\lambda = 0 & \#2 \ ODE
\end{align}
$$

- characteristic eq. of ODE \#2:

$$
\begin{gather}
m^{2}+(1-1)m-\lambda=0
\\\\
\implies m = \pm \sqrt{\lambda}
\end{gather}
$$


---

### Upper Half-Plane

$$
\begin{align}
&\nabla^{2}u(x, y) = 0 & \text{for } -\infty < x < \infty,\quad y > 0
\\\\
&u(x, 0) = f(x) & \text{for } -\infty < x < \infty
\end{align}
$$

### Quarter-Plane

$$
\begin{align}
&\nabla^{2}u(x, y) = 0 & \text{for } 0 < x < \infty,\quad y > 0
\\\\
&u(x, 0) = f(x) & \text{for } 0 \le x < \infty
\\\\
&u(0, y) = 0 &  \text{ for } y \ge 0
 \end{align}
$$

convert to [Upper Half-Plane](#Upper%20Half-Plane) problem, 

let

$$
g(x) = \left\{
\begin{align}
& f(x) & \text{for } x \geq 0
\\\\
&\text{anything} & \text{for } x <0
\end{align}\right.
$$

then solve


$$
\begin{align}
&\nabla^{2}u(x, y) = 0 & \text{for } -\infty < x < \infty,\quad y > 0
\\\\
&u(x, 0) = g(x) & \text{for } -\infty < x < \infty
\end{align}
$$

---

## Sphere in static state

- assume $u$ is independent of $\theta$

$$
\begin{gather}
\frac{\partial U}{\partial t}
= \nabla^{2} U=0
\end{gather}
$$

let $u(\rho, \phi) = X(\rho)\ \Phi(\phi)$

then

$$
\begin{align}
& \Phi'' + \cot(\phi)\Phi'+\lambda\Phi = 0 & \#1\  ODE
\\\\
& \rho^{2}X''+2\rho X' -\lambda X =0 & \# 2\  ODE
\end{align}
$$

### solve ODE #1

- ODE \# 1 can be converted to 

$$
\begin{gather}
\left[(1-x^{2})G'(x)\right]+\lambda G(x) = 0
\\\\
G(x) = \Phi(\phi), \qquad (x =  \cos(\phi))
\end{gather}
$$

which is a Legendre's Equation, then

$$
\begin{gather}
\lambda_{n} =n(n+1), \qquad n = 0, 1, 2, \dots
\\\\
\Phi_{n}(\phi) = G_{n}(x) = P_{n}(\cos(\phi))
\end{gather}
$$


### solve ODE #2

$$
\begin{gather}
\rho^{2}X''+2\rho X' -\lambda X =0
\\\\
m^{2}+(2-1)m- n(n+1) =0
\\\\
\implies m = -(n+1),\  n 
\end{gather}
$$

---

and finally we get,

$$
\begin{gather}
u(\rho, \phi) = \sum_{n=0}^{\infty}{a_{n}\rho^{n}P_{n}\big(\cos(\phi)\big)}
\\\\
u(R, \phi) = f(\phi) = \sum_{n=0}^{\infty}{a_{n}R^{n}P_{n}\big(\cos(\phi)\big)}
\\\\
\implies a_{n}R^{n} = \frac{<f\big(\cos^{-1}(x)\big), P_{n}(x)>}{<P_{n}(x),P_{n}(x)>}
\end{gather}
$$

- ref : [Fourier-Legendre Expansion](Special%20Functions#Fourier-Legendre%20Expansion)

$$
\begin{gather}
a_{n}R^{n} = \frac{2n+1}{2}\int_{-1}^{1}{f(\cos^{-1}(x))P_{n}(x)dx}
\end{gather}
$$

---

## Neumann Problem

$$
\begin{align}
&\nabla^{2} u(x, y) = 0 & \text{for } (x, y) \in D
\\\\
&\frac{\partial u}{\partial n}(x, y)= g(x, y) & \text{for } (x, y) \in \partial D
\end{align}
$$

- $D$ 表示定義區域（面）、$\partial D$ 表示 boundary of $D$
- $\frac{\partial u}{\partial n}$ 表示對法向量微分

- **necessary condition** : 

$$
\begin{gather}
\oint_{\partial D}{\frac{\partial u}{\partial n}ds} = 0
\end{gather}
$$

- 不滿足則無解（傳說中會考）

