## Proof to Modified Exact Equation Method
	
given
$$Mdx+Ndy=0$$
	
try to use the factor $\mu$ to make the 1<sup>st</sup> ODE the exact equation
	
$$
	\begin{gather}
	\mu Mdx+\mu Ndy=0\\
	\downarrow\\
	\frac{\partial \mu M}{\partial y}=\frac{\partial \mu N}{\partial x}\\
	\downarrow\\
	\mu_y M + \mu M_y = \mu_x N + \mu N_x\\
	\downarrow\\
	\mu = \frac{\mu_x N - \mu_y M}{M_y - N_x}
	\end{gather}
	$$
	
assume $\mu$ and ==$(M_y-N_x)/M$== is only dependent to $y$
	
$$\therefore\mu_x = 0$$
	
implies
	
$$\mu = \frac{M}{N_x-M_y}\frac{d\mu}{dy}$$
	
using  [separable varable method](1stODE#Separable%20Variable%20Method)
$$\mu(y) = e^{\int {\frac{(N_x-M_y)}{M}dy}}$$
	
simiar solution in the case that assume $\mu$ is only dependent to x.
