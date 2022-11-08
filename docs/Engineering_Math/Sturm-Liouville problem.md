# Sturm-Liouville problem
- aka S.L.P

- definition
 $$
 \begin{gather}
 (ry')' + (q+\lambda p)y = 0
 \\\\
 p>0 \text{ and }  r>0 \quad \text{on } (a, b)
 \end{gather}
 $$
 
 - eigenvalue $\lambda$
	 - S.L.P has a nontrivial solution for $\lambda$, then the $\lambda$ is an eigenvalue
	 
 - eigenfunction
	 - the solution for the corresponding S.L.P is called eigenfunction
 
 ## Regular SLP
- boundary condition

$$
\begin{align}
&A_1 y(a) + A_2 y'(a) = 0
\\\\
&B_1 y(b) + B_2 y'(b) = 0
\end{align}
$$
in which, 
$$
\begin{align}
&A_1^2 +A_2^2 \neq 0
\\\\
&B_1^2 + B_2^2 \neq 0
\end{align}
$$

## Periodic SLP
- define on $[a, b]$
- $r(a) = r(b)$
- $y(a) = y(b)$, $y'(a) = y'(b)$


## Singular SLP
- $r(a) = 0$ , or $r(b)=0$,  (or both)

---

## SL Theorem

1. if $\phi$ is an eigenfunction, then $c\ \phi$ is also an eigenfunction $\forall c \in ℝ$
2. $\lambda_n \neq \lambda_m$
3. let SLP define on $(a, b)$, then

$$
\begin{gather}
(\phi_n, \phi_m)=\int_a^b{p(x)\ \phi_n(x)\ \phi_m(x)\ dx} = 0
\end{gather}
$$

in which $p$ is weighted function

### Eigenfunction expansion

With series solution, we can write any function in
$$
\begin{align}
f(x) = \sum_{n =0}^{\infty}{a_n x^n}
\end{align}
$$

likewise, we can also write

$$
\begin{align}
f(x) = \sum_{m=0}^{\infty}{a_m y_m(x)}
\end{align}
$$

in which $y$ is an eigenfunction, multiply this equation by $p(x)y_{n}$
$$
\begin{gather}
p(x)\ f(x)\ y_{n} = \sum_{m=0}^{\infty}{a_{m}\ y_{n}\ y_{m}}
\end{gather}
$$
and integrate to get
$$
\begin{align}
(f, y_m) &= \sum_{n=1}^{\infty}{a_n (y_n, y_m)}
\\\\
&=a_m\ (y_m, y_m)
\\\\
a_m &= \frac{(f, y_m)}{(y_m, y_m)}=\frac{(f, y_m)}{||y_m||^2}
\end{align}
$$
