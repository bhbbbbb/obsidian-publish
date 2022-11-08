---
creation date: 2022/02/23 14:22
author: Smark Lin
---

## Vector Spaces

### Subspace

- Definition: skip due to complication

That's say a vector space $\mathbf V = \text{Span}\set \mathbf {v_1, v_2, v_3}$, 

 then the subspace $\mathbf H=\text{Span}\set\mathbf{v_1, v_2},\quad\text{Span}\set\mathbf{v_2, v_3}, \dots$
 
 Thus it's intuitive that subspace $\mathbf H$ have the property: $\set\mathbf 0 \in \mathbf H$
 
 ---


### Null Space

- Definition
<br>
for homogeneous equation
$$
\begin{gather}
\mathbf {Ax}= \mathbf 0
\\\\
\text{Nul } \mathbf A = \set {\mathbf x | \mathbf x \in \mathbf R^{n} \,\cap\, \mathbf {Ax=0}}
\end{gather}
$$

```ad-note
title: example
collapse: true

$$
\begin{gather}
A=
\begin{bmatrix}
1 & -3 & -2 \\
-5 & 9 & -1
\end{bmatrix}
\qquad
u=
\begin{bmatrix}
5 \\ 3 \\ -2
\end{bmatrix}
\\\\
\mathbf {Au}=
\begin{bmatrix}
1 & -3 & -2 \\
-5 & 9 & -1
\end{bmatrix}
\begin{bmatrix}
5 \\ 3 \\ -2
\end{bmatrix}
=
\begin{bmatrix}
0 \\ 0
\end{bmatrix}
\end{gather}
$$

Thus $\mathbf u$ is in $\text{Nul }\mathbf A$.

```

#### Properties
1. $\text{Nul }\mathbf A$ is namely the solution space of $\mathbf x$

1. for the matrix $\mathbf A_{m\times n}$, $\text{Nul }\mathbf A$ is a subspace of  $ℝ^{n}$
<br>
since $\mathbf {Ax=0}$, thus $\mathbf x$ can be written as 
$$
\begin{gather}
\mathbf x=
\begin{bmatrix}
x_1 \\ x_2 \\ \vdots \\ x_n
\end{bmatrix}
\end{gather}
$$
so this property is intuitive.


---

### Column Space

- Definition: For an $m\times n$ matrix $\mathbf A=[a_1, a_2, \dots, a_n]$
<br>
$$
\begin{gather}
\text{Col }\mathbf A= \text{Span}\set{a_1, a_2, \dots, a_n}
\\\\
a_i \in ℝ^{m}
\end{gather}
$$
or equivalently,
$$
\begin{gather}
\text{Col }\mathbf A=\set{\mathbf {Ax}|\mathbf x \in ℝ^{n}}
\end{gather}
$$

#### Properties

- $\text{Col }\mathbf A$ is a subspace of $ℝ^{m}$
- range of linear transform $\mathbf {Ax}$
- $\text{rank }\mathbf A = \text{dim}(\text{Col } \mathbf A)$
- $\text{rank }\mathbf A+\text{dim}(\text{Nul }\mathbf A)=n$
<br>
this is quite intuitive since when we lost $1$ dimension in $\text{Col }\mathbf A$, we got $1$ dimension in solution space.
<br>
e.g. $3$ equations in $ℝ^{3}$ can yield an unique solution. However, $2$ equations can only yield a line (i.e. one dimension) at most.



---
## Characteristic Equation

### Eigenvector & Eigenvalue

- Definition
<br>
$$
\begin{gather}
\mathbf {Ax}= \lambda \mathbf x
\\\\
\Updownarrow 
\\\\
\mathbf {(A-\lambda I)\,x}= 0
\end{gather}
$$
$n\times n$ matrix $\mathbf A$, with the eigenvector $\mathbf x$ and eigenvalue $\lambda$.

note:

1. $\mathbf 0$ cannot be an eigenvector (since it is trivial and by definition)
1. 0 can be an eigenvalue.


---

## Orthogonality

### Orthogonal Complements

1. A vector $\mathbf x$ is in $\mathbf {W^{\bot}}$ *iff* $\mathbf x$ is orthogonal to every vector in $\mathbf W$
1. $(\text{Row }\mathbf {A})^{\bot}=\text{Nul }\mathbf A$
1. $(\text{Col }\mathbf {A})^{\bot}=\text{Nul }\mathbf {A^{T}}$

---

### Orthogonal Projection

- Given a vector $\mathbf y$ and a subspace $\mathbf W$ in $ℝ^{n}$

$$
\begin{align}
\mathbf y &= c_1 \mathbf {u_1} + c_2 \mathbf {u_2} + \dots + c_n \mathbf {u_n}
\\\\
&=
\begin{bmatrix}
\mathbf {u_1} &  \mathbf {u_2} & \cdots & \mathbf {u_n} \\
\end{bmatrix}
\begin{bmatrix}
c_1 \\ c_2 \\ \vdots \\ c_n
\end{bmatrix}
\end{align}
$$


Let's say $\mathbf W = \text{Span }\{\mathbf u_1, \mathbf u_2, \dots, \mathbf u_p\}$ ($p \le n$)

then the orthogonal projection of $\mathbf y$ onto $\mathbf W$, $\hat {\mathbf y}$ (aka $\text{proj}_{\mathbf W}\mathbf y$)

$$
\begin{gather}
\hat {\mathbf y} = \frac{\mathbf {y \cdot u_1}}{||\mathbf {u_1}||^{2}}\mathbf u_1 +  \frac{\mathbf {y \cdot u_2}}{||\mathbf {u_2}||^{2}}\mathbf u_2 + \dots+ \frac{\mathbf {y \cdot u_p}}{||\mathbf {u_p}||^{2}}\mathbf {u_p}
\end{gather}
$$

assume $\{\mathbf u_1, \mathbf u_2, \dots, \mathbf u_p\}$ is an orthonormal basic. we can thus further write

$$
\begin{align}
\hat {\mathbf y} &= \frac{\mathbf {y \cdot u_1}}{||\mathbf {u_1}||^{2}}\mathbf u_1 +  \frac{\mathbf {y \cdot u_2}}{||\mathbf {u_2}||^{2}}\mathbf u_2 + \dots+ \frac{\mathbf {y \cdot u_p}}{||\mathbf {u_p}||^{2}}\mathbf {u_p}
\\\\
&= (\mathbf {y \cdot u_1})\mathbf {u_1} + (\mathbf {y \cdot u_2})\mathbf {u_2} + (\mathbf {y \cdot u_p})\mathbf {u_p}
\\\\
&=
\begin{bmatrix}
\mathbf {u_1} &  \mathbf {u_2} & \cdots & \mathbf {u_p} \\
\end{bmatrix}
\begin{bmatrix}
\mathbf {y \cdot u_1} \\
\mathbf {y \cdot u_2} \\
\vdots \\
\mathbf {y \cdot u_p} \\
\end{bmatrix}
\\\\
&=
\begin{bmatrix}
\mathbf {u_1} &  \mathbf {u_2} & \cdots & \mathbf {u_p} \\
\end{bmatrix}
\begin{bmatrix}
\mathbf {u_1^{T}} \\
\mathbf {u_2^{T}} \\
\vdots \\
\mathbf {u_p^{T}} \\
\end{bmatrix}
\mathbf y
\\\\
&= \mathbf {UU^{T}y}
\end{align}
$$

Thus, we can conclude that for an $n \times p$ matrix $\mathbf U$ which consists of $\mathbf W$ which is $p$-dimension subspace of $ℝ^{n}$, there is $\mathbf {UU^{T}}$ that project $\mathbf y \in ℝ^{n}$ onto $\mathbf W$.

$$
\begin{gather}
\mathbf {UU^{T}y}=\text{proj}_{\text{W}}\,\mathbf y
\end{gather}
$$


---

## Diagonalization

### Diagonal Matrix

$\mathbf D$ is said to be a diagonal matrix if $\mathbf D$ has the form
$$
\begin{gather}
\mathbf D=
\begin{bmatrix}
a		& 0 & 0 & \cdots \\
0		& b & 0 & \cdots \\
0		& 0 & c & \cdots \\
\vdots	& \vdots	& \vdots & \ddots \\
\end{bmatrix}
\end{gather}
$$

thus $\mathbf D$ has the property

$$
\begin{gather}
\mathbf D^{n}=
\begin{bmatrix}
a^{n}		& 0 & 0 & \cdots \\
0		& b^{n} & 0 & \cdots \\
0		& 0 & c^{n} & \cdots \\
\vdots	& \vdots	& \vdots & \ddots \\
\end{bmatrix}
\end{gather}
$$

---

### Diagonalization

Square matrix $\mathbf A$ is said to be diagonalizable if 

1. $\mathbf {A=PDP^{-1}}$
1. in which $\mathbf {D}$ is diagonal matrix
1. $\mathbf P$ is **invertible** matrix.

#### The Diagonalization Theorem

An $n \times n$ matrix $\mathbf A$ is diagonalizable *iff* $\mathbf A$ has $n$ eigenvectors and eigenvalues(may be multiple roots).


```ad-note
title: Easy Proof
collapse: none

Let's say an invertiable matrix $P_{n\times n}$ and diagnol matrix $D$
$$
\begin{gather}
\mathbf P = [\mathbf {v_1, v_2, \dots , v_n}]
\qquad
D = 
\begin{bmatrix}
\lambda_1	&	0	&		 \\
0			&	\lambda_2 &    \\
			&		&	  \ddots \\
					&	   &  &\lambda_n
\end{bmatrix}
\\\\
\mathbf {AP}=\mathbf{[Av_1, Av_2, \dots]}
\\\\
\mathbf {PD}=[\mathbf {v_1, v_2, \dots , v_n}]
\begin{bmatrix}
\lambda_1	&	0	&		 \\
0			&	\lambda_2 &    \\
			&		&	  \ddots \\
					&	   &  &\lambda_n
\end{bmatrix}
=[\mathbf {\lambda_1v_1,\,\lambda_2v_2,\,\dots}]
\end{gather}
$$

by the defintion of characteristic equation

$$
\begin{gather}
\mathbf {AP=PD}
\\\\
\implies \mathbf {A=PDP^{-1}}
\end{gather}
$$
```


### Orthogonally Diagonalizable

- Definition
<br>
A matrix is said to be orthogonally diagonalizable if 

$$
\begin{gather}
\mathbf {A=PDP^{T}=PDP^{-1}}
\\\\
\Updownarrow
\\\\
\mathbf {A^{T}=P^{TT}D^{T}P^{T}=PDP^{T}=A}
\end{gather}
$$

- And *iff* $\mathbf A$ is a symmetric matrix.

---

### SVD

- **S**ingular **V**alue **D**iagonalization


#### Singular Values

Let $\mathbf A$ be an $m\times n$ matrix. Then

$$
\begin{gather}
({\mathbf {A^{T}A}})^{\mathbf T}=\mathbf {A^{T}A^{TT}}={\mathbf {A^{T}A}}
\end{gather}
$$

Thus, $\mathbf {A^{T}A}$ is symmetric and orthogonally diagonalizable.

Then, Let say $\{\mathbf {v_1, v_2, \dots, v_n}\}$ be an orthonormal basic for $\mathbf ℝ^{n}$ consisting of eigenvectors of $\mathbf {A^T A}$

And also, say $\lambda_1, \lambda_2, \dots$ be the eigenvalues of $\mathbf {A^{T}A}$ <br>(make $\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_n \ge 0$)

The **singular values** $\sigma_i$ of $\mathbf A$ are 

$$
\begin{gather}
\sigma_i = \sqrt{\lambda_i}
\end{gather}
$$


```ad-note
title: Thinking
collapse: none

Singular values are the "eigenvalues" of non-square matrix $\mathbf A$.

```

##### Properties

1. $\{\mathbf {Av_1, Av_2, \dots, Av_n}\}$ is an orthogonal set.
<br>
for any $i\neq j$, $\mathbf {(Av_i)^{T}(Av_j)=v_i A^{T}Av_j=v_i\lambda_j v_j}=0$
<br>
1. $\{\mathbf {Av_1, Av_2, \dots, Av_r}\}$ is an orthogonal basic of $\text{Col }\mathbf A$. $\iff \text{rank }\mathbf A = \text{dim }\text{Col }\mathbf A=r$ 
<br>
say $\mathbf {y = Ax}$ in $\text{Col }\mathbf A$, then
$$
\begin{gather}
\begin{aligned}
\mathbf x &= c_1 \mathbf v_1 + c_2 \mathbf v_2 + \dots + c_r \mathbf v_r + \dots + c_n \mathbf v_n
\\\\
&= c_1' \mathbf v_1 + c_2' \mathbf v_2 + \dots + c_r' \mathbf v_r
\end{aligned}
\\\\
\Downarrow
\\\\
\begin{aligned}
\mathbf y &=\mathbf {Ax}
\\\\
&= c_1' \mathbf {Av_1} + c_2' \mathbf {Av_2} + \dots + c_r' \mathbf {Av_r}
\end{aligned}
\end{gather}
$$

---

#### Singular Value Decomposition

- $m\times n$ "diagonal" matrix
$$
\begin{gather}
\mathbf \Sigma_{m\times n}=
\begin{bmatrix}
\mathbf D_{r\times r} & \mathbf 0_{r\times (n-r)} \\
\mathbf 0_{(m-r)\times r} & \mathbf 0_{(m-r)\times (n-r)} \\
\end{bmatrix}
\end{gather}
$$
e.g. $\mathbf A_{2\times 3}$ with $r=2$
$$
\begin{gather}
\mathbf \Sigma=
\begin{bmatrix}
\sigma_1 & 0 & 0 \\
0 & \sigma_2 & 0 \\
\end{bmatrix}
\end{gather}
$$

---

- singular value decomposition

$$
\begin{gather}
\mathbf A_{m\times n}= \mathbf U_{m\times m} \mathbf \Sigma_{m\times n} {\mathbf V_{n\times n}}^{\mathbf T}
\end{gather}
$$

- Left singular vectors of $A\,\,$ : The columns of $\mathbf U$
- Right singular vectors of $A$ : The columns of $\mathbf V$

```ad-note
title: Easy Proof
collapse: none

First following the [property](#Singular%20Values#Properties) 2. of singular value, we can obtain an orthonormal basic $\{\mathbf {u_1, u_2, \dots, u_r}\}$ by

$$
\begin{gather}
\mathbf {u_i} = \mathbf {\frac{Av_i}{||Av_i||}} = \frac{\mathbf {Av_i}}{\sigma_i}
\end{gather}
$$

then

$$
\begin{gather}
\begin{aligned}
\mathbf {U\Sigma} &=
\begin{bmatrix}
\mathbf {u_1} & \mathbf {u_2} & \cdots & \mathbf {u_m}
\end{bmatrix}
\begin{bmatrix}
\sigma_1 & 0 & \cdots \\
0 & \sigma_2 & \cdots \\
& & \ddots
\end{bmatrix}_{m\times n}
\\\\
&=
\begin{bmatrix}
\sigma_1 \mathbf u_1 & \sigma_2 \mathbf u_2 & \cdots & \sigma_r \mathbf u_r & \mathbf 0  & \cdots & \mathbf 0
\end{bmatrix}
\\\\\\
\mathbf {AV} &= 
\begin{bmatrix}
\mathbf {Av_1} & \mathbf {Av_2} & \cdots & \mathbf {Av_n} 
\end{bmatrix}
\\\\
&=
\begin{bmatrix}
\sigma_1 \mathbf u_1 & \sigma_2 \mathbf u_2 & \cdots & \sigma_r \mathbf u_r & \mathbf 0  & \cdots & \mathbf 0
\end{bmatrix}
\end{aligned}
\\\\\\
\implies \mathbf {U\Sigma=AV}
\implies \mathbf {U\Sigma V^{T}=A}
\end{gather}
$$


```

---

#### Least-Squares Solution

- Target
<br>
for $m \times n$ matrix $\mathbf A$
$$
\begin{gather}
\mathbf A=
\begin{bmatrix}
\mathbf {a_1} & \mathbf {a_2} & \cdots &\mathbf {a_n} 
\end{bmatrix}
\\\\
\mathbf {Ax=b}
\end{gather}
$$
say $\mathbf b$ is a linear combination of columns of $\mathbf A$ for solution $\mathbf x$.

Most of times we cannot find the perfect solution. Thus, we try to find the Least-Squares solution $\mathbf {\hat x}$.

Find

$$
\begin{gather}
\mathbf {\hat x} = \mathop{\arg\min}_{\mathbf {\hat x}}{\,||\mathbf {b-A\hat x}||}^{2}
\end{gather}
$$

First, let define

$$
\begin{gather}
\mathbf {p = A\hat{x} \in \text{Col }A}
\end{gather}
$$

We know that the least-square root happens at $(\mathbf {b-p})$ orthogonal to $\mathbf p$.

Thus say the projection matrix $\mathbf P$ s.t.
$$\mathbf {P b=p}$$

Back to the condition $\mathbf {(b-p)\cdot p}=0$. That is

$$
\begin{align}
\mathbf p &\in \text{Col }\mathbf {A}
\\\\
\mathbf {(b-p)} &\in (\text{Col }\mathbf {A})^{\bot} = \text{Nul }\mathbf {A^{T}} \tag{a}
\end{align}
$$

from the definition of null space and equation $a$, we have

$$
\begin{gather}
\mathbf {A^{T}(b-p)=0}
\\\\
\implies
\mathbf {A^{T}(b-A\hat x)=0}
\\\\
\implies
\mathbf {A^{T}A\hat x=A^{T}\,b}
\\\\
\implies
\mathbf {\hat x=(A^{T}A)^{-1}A^{T}\,b}
\end{gather}
$$

Besides, we now further have

$$
\begin{gather}
\mathbf {p=A\hat x=A(A^{T}A)^{-1}A^{T}\,b} \tag{b}
\\\\
\mathbf {P = A(A^{T}A)^{-1}A^{T}}
\end{gather}
$$




---

##### Pseudoinverse Aspect

$$
\begin{gather}
\mathbf {A\hat x=b}
\\\\
\implies \mathbf {\hat x=A^{\dagger}\,b}
\\\\
\implies
\mathbf {p=A\hat x=AA^{\dagger}\,b} \tag{c}
\end{gather}
$$

compare equation $b$ and $c$

$$
\begin{align}
\mathbf {p}&=\mathbf {A\hat x=AA^{\dagger}\,b}
\\\\
&= (\mathbf {U_r D V_r^{T}})(\mathbf {V_r D^{-1} U_r^{T}})\,\mathbf b
\\\\
&= \mathbf {U_r U_r^{T}}\,\mathbf {b}
\end{align}
$$

by theorem of [Orthogonal Projection](#Orthogonal%20Projection), we know that

$$
\begin{gather}
\mathbf {P} = \mathbf {AA^{\dagger}} = \mathbf {U_r U_r^{T}}
\end{gather}
$$
