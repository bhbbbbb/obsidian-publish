---
creation date: 2021/10/06 21:48
author: Smark Lin
---

## Gradient
### Cartesian

$$
\begin{gather}
\nabla V = \left<\frac{\partial }{\partial x}, \frac{\partial }{\partial y}, \frac{\partial }{\partial z}\right>  V
\end{gather}
$$

### cylindrical

$$
\begin{gather}
\nabla V = \left<\frac{\partial }{\partial \rho}, \frac{1}{\rho}\frac{\partial }{\partial \phi}, \frac{\partial }{\partial z}\right>  V
\end{gather}
$$

### spherical

$$
\begin{gather}
\nabla V = \left<\frac{\partial }{\partial r}, \frac{1}{r}\frac{\partial }{\partial \theta}, \frac{1}{r\sin \theta}\frac{\partial }{\partial \phi}\right>  V \end{gather}
$$

---
##  Divergence

### Definition
- hint: Stoke's Theorem 
	
$$
\begin{gather}
\nabla \cdot \vec A \equiv \lim_{v\to 0}\frac{\oint_S{\vec A \cdot d\vec S}}{\int_vdv}
\end{gather}
$$


### Physical Interpretation
- **flux per unit volume**
- measure of **outgoingness** of vector (發散傾向)
- $\nabla \cdot \vec A > 0$ (source)
- $\nabla \cdot \vec A < 0$ (sink)




---
- proof: https://en.wikipedia.org/wiki/Del_in_cylindrical_and_spherical_coordinates
### Cartesian

$$
\begin{gather}
\nabla \cdot \vec D = \frac{\partial }{\partial x}D_x + \frac{\partial }{\partial y}D_y + \frac{\partial }{\partial z}D_z
\end{gather}
$$

### cylindrical

$$
\begin{gather}
\nabla \cdot \vec D = \frac{1}{\rho}\frac{\partial }{\partial \rho}(\rho D_\rho) + \frac{1}{\rho}\frac{\partial }{\partial \phi}D_\phi + \frac{\partial }{\partial z}D_z
\end{gather}
$$

### spherical


$$
\begin{gather}
\nabla \cdot \vec D = \frac{1}{r^{2}}\frac{\partial }{\partial r}(r^{2}D_r) + \frac{1}{r\sin\theta}\frac{\partial }{\partial \theta}(D_\theta \sin\theta) + \frac{1}{r\sin\theta}\frac{\partial }{\partial \phi}D_\phi
\end{gather}
$$


---

## Laplacian

$$
\begin{gather}
\nabla^2 V \equiv \nabla \cdot (\nabla V)
\\\\
\nabla^2 \vec A \equiv \nabla (\nabla \cdot \vec A) - \nabla \times \nabla \times \vec A
\end{gather}
$$


- cylindrical

$$
\begin{gather}
\nabla^{2}V=\frac{1}{\rho}\frac{\partial }{\partial \rho }\left(\rho V_\rho\right)+\frac{1}{\rho^{2}}V_{\phi\phi}+V_{zz}
\end{gather}
$$

- spherical

$$
\begin{gather}
\nabla^{2}V=\frac{1}{r^{2}}\frac{\partial }{\partial r }\left(r^{2} V_r\right)+\frac{1}{r^{2}\sin\theta}\frac{\partial }{\partial \phi}\left(\sin\theta\,V_\theta\right)+\frac{1}{r^{2}\sin^{2}\theta}\left(V_{\phi\phi}\right)
\end{gather}
$$

---


## Curl

- Definition

$$
\begin{gather}
(\nabla \times \vec A)\cdot \hat{a_n} = \lim_{\Delta S\to0}\frac{\oint_c{\vec A \cdot d \vec l}}{\Delta S}
\end{gather}
$$

- Cartesian

$$
\nabla \times \vec A=
\left|
\begin{matrix}
\hat {a_x} & \hat {a_y} & \hat {a_z}
\\
\frac{\partial }{\partial x} &\frac{\partial }{\partial y} & \frac{\partial }{\partial z} 
\\
A_x & A_y & A_z
\end{matrix}\right|
$$

- cylindrical


$$
\nabla \times \vec A=
\frac{1}{\rho}
\left|
\begin{matrix}
\hat {a_\rho} & \rho\hat {a_\phi} & \hat {a_z}
\\
\frac{\partial }{\partial \rho} &\frac{\partial }{\partial \phi} & \frac{\partial }{\partial z} 
\\
A_\rho & \rho A_\phi & A_z
\end{matrix}\right|
$$

- spherical


$$
\nabla \times \vec A=
\frac{1}{r^{2}\sin\theta}
\left|
\begin{matrix}
\hat {a_r} & r\hat {a_\theta} & r\sin\theta\,\hat {a_\phi}
\\
\frac{\partial }{\partial r} &\frac{\partial }{\partial \theta} & \frac{\partial }{\partial \phi} 
\\
A_r & rA_\theta & r\sin\theta A_\phi
\end{matrix}\right|
$$

---

## Identities

$$
\begin{gather}
\vec A \times \left(\vec B \times \vec C\right)=\left(\vec A \cdot \vec C\right)\vec B -\left(\vec A \cdot \vec B\right)\vec C
\\\\\\
\nabla \cdot \left(\vec A \times \vec B\right)=\left(\nabla \times \vec A\right)\cdot \vec B - \left(\nabla \times \vec B\right)\cdot \vec A
\\\\\\
\nabla \times \left(\vec A \times \vec B\right)=\vec A\left(\nabla \cdot \vec B\right)- \vec B\left(\nabla \cdot \vec A\right)+\left(\vec B \cdot \nabla\right)\vec A - \left(\vec A\cdot \nabla\right)\vec B
\end{gather}
$$
