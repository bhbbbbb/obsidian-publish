---
creation date: 2021/11/17 18:44
author: Smark Lin
---

## Boundary Value Problem

- 2D Fourier Series

???+ note "2D Fourier Series"
    
    ### 2D Fourier Series
    
    - $p$ is a half of period
    
    $$
    \begin{gather}
    f(x,y) = \sum{c_{mn}e^{jmx}e^{jny}}
    \\\\
    c_{mn} = \frac{1}{2p_x}\frac{1}{2p_y}\int_{Py}\int_{Px}{f(x, y)e^{-jmx}e^{-jny}\ dxdy}
    \end{gather}
    $$
    
    #### 2D Fourier Sine Series
    
    - $p$ is a half of period
    
    $$
    \begin{gather}
    f(x,y) = \sum_{n, m \in ℕ}{b_{m, n}\sin{\frac{n\pi}{p_x} x}\,\sin{\frac{n\pi}{p_y} y}}
    \\\\
    b_{m, n} = \frac{2}{p_x}\frac{2}{p_y}\int_{P_y}\int_{P_x}{f(x,y)\sin{\frac{n\pi}{p_x}x}\,\sin{\frac{n\pi}{p_y}y}\,dxdy}
    \end{gather}
    $$
    
    - similar to [1D Fourier Sine Series](../../2nd_Fall/Engineering_Math/Fourier%20Series.md)

---
### Possion's Equation

$$
\begin{gather}
\nabla^{2}V=-\frac{\rho_v}{\varepsilon_0}
\end{gather}
$$

we can solve Possion's equation by superposition which similar to how we solve non-homogeneous differential equation.

let $V = V_L + V_P$, in which $V_L$ indicates the homogeneous differential equation case ($\rho_v = 0$) i.e., Laplace's equation.

$$
\begin{gather}
\nabla^{2} V_L =0
\end{gather}
$$

as for the $V_P$ indicates the homogeneous boundary conditions, i.e., $\forall \,\text{boundary }V_b = 0$

$$
\begin{gather}
\nabla^{2}V_P=-\frac{\rho_v}{\varepsilon_0}
\end{gather}
$$

assume that

$$
\begin{gather}
V_p = \sum_{m=1}^{\infty}\sum_{n=1}^{\infty}{A_{mn}\sin{\frac{m\pi x}{b}}\sin{\frac{n\pi y}{a}}}
\\\\
\rho_v = \sum_{m=1}^{\infty}\sum_{n=1}^{\infty}{C_{mn}\sin{\frac{m\pi x}{p_x}}\sin{\frac{n\pi y}{p_y}}}
\end{gather}
$$

notice that usually $C_{mn}$ is known, but the $A_{mn}$ is unknown

for $C_{mn}$

$$
\begin{gather}
C_{mn} = \frac{2}{p_x}\frac{2}{p_y}\int_X\int_Y {\rho_v\sin\frac{m\pi x}{p_x}\sin\frac{n\pi y}{p_y}dxdy}
\end{gather}
$$

$$
\begin{align}
\nabla^{2}V_P=\sum_{m=1}^{\infty}\sum_{n=1}^{\infty}{A_{mn}\left[\left(\frac{m\pi}{p_x}\right)^{2}+\left(\frac{n\pi}{p_y}\right)^{2}\right]\sin{\frac{m\pi x}{b}}\sin{\frac{n\pi y}{a}}}
\end{align}
$$

$$
\begin{gather}
\implies A_{mn}
\end{gather}
$$



---

### 3D Laplace's Equation

#### Cartesian

$$
\begin{gather}
V(x, y, z) = X(x) Y(y) Z(z)
\\\\
\end{gather}
$$

$$
\begin{gather}
\nabla^{2}V = 0
\\\\
\frac{X''}{X}+\frac{Y''}{Y}+\frac{Z''}{Z} =-k_x^{2}-k_y^{2}-k_z^{2} = 0
\end{gather}
$$


$$
\implies \left\{
\begin{gather}
X''+k_x^{2}X &= 0
\\\\
Y''+k_y^{2}Y &= 0
\\\\
Z''+k_z^{2}Z &= 0
\\\\
k_{x}^{2}+k_y^{2}+k_z^{2} &= 0
\end{gather}\right.
$$

<!--
- case: all zero
<br>

$$k_x = k_y = k_z = 0$$


$$
\begin{gather}
V =  (A_1 x + A_2)(B_1y + B_2)(C_1z + C_2)
\end{gather}
$$

- case: only one of these is $0$
<br>
e.g.

$$
\begin{gather}
k_x =0
\\\\
k_y^{2} + k_z^{2} = 0
\end{gather}
$$

- case: all non-zero
<br>
e.g.

$$
\begin{gather}
k_x^{2} > 0
\\\\
k_y^{2}>0
\\\\
k_z^{2} = -(k_x^{2}+k_y^{2}) < 0
\end{gather}
$$

--->
#### Cylindrical

$$
\begin{gather}
V(\rho, \phi, z) = P(\rho)\Phi(\phi)Z(z)
\\\\
\nabla^{2}V=\frac{1}{\rho}\frac{\partial}{\partial \rho}\left(\rho V_\rho\right)+\frac{1}{\rho^{2}}V_{\phi\phi}+V_{zz} = 0
\\\\
\frac{\nabla^{2}V}{P\Phi Z}=\frac{1}{\rho}\left(\rho \frac{P''}{P}+\frac{P'}{P}\right)+\frac{1}{\rho^{2}}\frac{\Phi''}{\Phi}+\frac{Z''}{Z} =0
\\\\
\implies
\frac{1}{\rho}\left(\rho \frac{P''}{P}+\frac{P'}{P}\right)+\frac{1}{\rho^{2}}\frac{\Phi''}{\Phi}=-\frac{Z''}{Z} \equiv \mathbf{-\lambda^{2}}
\\\\
\rho^{2} \frac{P''}{P}+\rho\frac{P'}{P}+\rho^{2}\lambda^{2}=-\frac{\Phi''}{\Phi} \equiv \mu^{2}
\\\\
\end{gather}
$$
 
 $$
\implies \left\{
\begin{gather}
Z''-\lambda^{2}Z=0
\\\\
\Phi'' + \mu^{2}\Phi = 0
\\\\
\rho^{2}P'' + \rho P' + \left(\rho^{2}\lambda^{2} - \mu^{2}\right)P = 0 & \#Eq3
\end{gather}\right.
$$

in which Eq. 3 is a [Bessel Function](obsidian://open?vault=1092_note&file=Engineering%20Math%2FSpecial%20Functions)

notice that if $\lambda  = 0$ (e.g. the situation that $V$ is independent of $z$), Eq. 3 would be an Euler-Cauchy Equation, rather than Bessel.

for $\lambda > 0$, let $x=\rho\lambda$
and $y=P$

note that

$$
\begin{gather}
dx=d(\rho\lambda)=\lambda d\rho
\\\\
y'=\frac{dy}{dx}=\frac{dP}{dx}=\frac{1}{\lambda }\frac{dP}{d\rho}
\end{gather}
$$

Eq.3 become

$$
\begin{gather}
x^{2}y''+xy+(x^{2}-\mu^{2})y=0
\end{gather}
$$
