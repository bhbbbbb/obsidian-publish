---
creation date: 2022/04/11 14:51
author: Smark Lin
---



## EM Wave Equations

- in free space


by Maxwell's equations, we have

$$
\begin{align}
\nabla \times \vec E &= - \mu_0\frac{\partial \vec H}{\partial t}\tag 1
\\\\
\nabla \times \vec H &= \varepsilon_0 \frac{\partial \vec E}{\partial t} 
\\\\
\end{align}
$$

^equ-1

$$
\begin{align}
\nabla^{2}\vec E&=\nabla\left(\nabla \cdot \vec E\right)-\nabla \times \nabla \times \vec E
\\\\
&=0-\left(-\mu_0\frac{\partial }{\partial t}\left(\nabla \times \vec H\right)\right)
\\\\
&=\mu_0\varepsilon_0\frac{\partial^{2} \vec E}{\partial t^{2}}
\end{align}
$$

and similar for $\nabla ^{2}\vec H$.

We can now have the wave equations

$$
\left\{
\begin{align}
\nabla ^{2}\vec E&=\mu_0\varepsilon_0\frac{\partial^{2} \vec E}{\partial t^{2}}
\\\\
\nabla^{2}\vec H 
&= \mu_0\varepsilon_0\frac{\partial^{2} \vec H}{\partial t^{2}}
\end{align}\right.
$$

compare to standard form of wave equation

$$
\begin{gather}
\frac{\partial ^{2}\vec U}{\partial t^{2}}=c^{2}\,\nabla ^{2} \vec U
\end{gather}
$$

we have

$$
\begin{gather}
c=\frac{1}{\sqrt{\mu_0\varepsilon_0}}
\end{gather}
$$

---

### General Solutions (Frequency Domain)

$$
\begin{gather}
\nabla ^{2}\vec {E_s} - \gamma^{2}\vec {E_s} = 0
\\\\
\nabla ^{2}\vec {H_s} - \gamma^{2}\vec {H_s} = 0
\end{gather}
$$

in which $\gamma$ is propagation constant.

$$
\begin{gather}
\gamma = \sqrt{j\omega\mu(\sigma + j\omega \varepsilon)}
\end{gather}
$$


!!! Note "Thinking"
    
    - Faraday's Law
    
    $$
    \begin{gather}
    \nabla \times \vec{E_s} = j\omega\mu \vec{H_s}
    \end{gather}
    $$
    
    - Ampere's Law
    
    $$
    \begin{gather}
    \nabla \times \vec{H_s} = \sigma \vec {E_s} + j\omega \varepsilon\vec{E_s}
    \end{gather}
    $$


---

### General Solutions (Transmission Line)

Take the wave propagates through $\hat {a_z}$ direction, then

$$
\left\{
\begin{align}
\vec E= E_x^{+}(z-ut) \, \hat{a_x} + E^{-}_x(z+ut)\,\hat{a_x}
\\\\
\vec H= H_y^{+}(z-ut) \, \hat{a_y} + H^{-}_y(z+ut)\,\hat{a_y}
\end{align}\right.
$$

from $\text{equation (a)}$ we have

$$
\begin{align}
\mu_0\frac{\partial \vec H}{\partial t} &= - \nabla \times \vec E = -\frac{\partial \vec E}{\partial z}
\\\\
&= -\bigg({E_x^{+}}'(z-ut) \, \hat{a_x} + {E^{-}_x}'(z+ut)\,\hat{a_x}\bigg)
\\\\
\implies
\vec H &= -\frac{1}{\mu_0}\int\left({E_x^{+}}'(z-ut) \, \hat{a_x} + {E^{-}_x}'(z+ut)\,\hat{a_x}\right)\,dt
\\\\
&= \frac{1}{u\mu_0}\bigg({E_x^{+}}(z-ut) \, \hat{a_x} - {E^{-}_x}(z+ut)\,\hat{a_x}\bigg)
\\\\
&= \frac{1}{\sqrt{\mu_0/\varepsilon_0}}\bigg({E_x^{+}}(z-ut) \, \hat{a_x} - {E^{-}_x}(z+ut)\,\hat{a_x}\bigg)
\end{align}
$$

Thus we can obtain the wave impedance in free space $\eta_0$

$$
\begin{gather}
\eta_0 = \sqrt\frac{\mu_0}{\varepsilon_0} = \frac{E_x^{+}}{H_x^{+}}=-\frac{E_x^{-}}{H_x^{-}}
\end{gather}
$$

---

### Power

- Poynting Vector

$$
\begin{gather}
\vec P = \vec E \times \vec H \qquad \text{W/m}^{2}
\end{gather}
$$

- Instantaneous power across $S$

$$
\begin{gather}
P(t)=\int_S \vec P \cdot d\vec S
\end{gather}
$$

- complex Poynting vector<br>
not a phasor, but come up by phasors trickily.<br>
notice that complex Poynting vector is not function of $t$. Since it is generated from phasors, it represents the concept of average.

$$
\begin{gather}
\vec P_c=\frac{1}{2}\vec E_s\times\vec H_s^{*}
=\frac{1}{2}\vec E_s^{*}\times\vec H_s
\\\\
\vec P_{ave}=\text{Re}\left[\vec P_c\right]\qquad \text{W/m}^{2}
\end{gather}
$$

---


### Loss Tangent

- for lossless medium, $\sigma = 0$.

- propagation constant $\gamma$

$$
\begin{gather}
\gamma = \sqrt{j\omega \mu(\sigma + j\omega\varepsilon)}
\end{gather}
$$


- Loss Tangent

$$
\begin{gather}
\tan\theta =  \frac{J_{cs}}{J_{ds}} = \frac{|\sigma E_s|}{|j\omega\varepsilon E_s|} = \frac{\sigma}{\omega \varepsilon}
\end{gather}
$$

- Loss Angle

$$
\begin{gather}
\theta = \tan^{-1}{\frac{\sigma}{\omega\varepsilon}}
\end{gather}
$$

- Skin Depth

$$
\begin{gather}
\delta = \frac{1}{\alpha}
\end{gather}
$$

---

## Wave Polarization


$$
\begin{gather}
\vec E = E_x \,\hat{a_x} + E_y \,\hat{a_y}
\\\\
= E_{ox}\cos{(\omega t - \beta z + \phi_x)} \, \hat{a_x}
+ E_{oy}\cos{(\omega t - \beta z + \phi_y)} \, \hat{a_y}
\\\\
\Delta \phi = \phi_y - \phi_x
\end{gather}
$$

### Linear Polarization

$$
\begin{align}
\vec E &= E_x \,\hat{a_x} + E_y \,\hat{a_y}
\\\\
&= E_1 \,\hat{a_1} + E_2 \,\hat{a_2} \, 
\end{align}
$$

- $\Delta \phi = n\pi, \quad n\in Z^{+}$

$$
\begin{gather}
\frac{E_{y}}{E_{x}}= \frac{E_{oy}\cos{(\omega t - \beta z + \phi_x + \Delta \phi)}}{E_{ox}\cos{(\omega t - \beta z + \phi_x)}} = \frac{E_{oy}}{E_{ox}}
\end{gather}
$$

- no necessarily perpendicular 


### Circular Polarization

1. $E_{ox} = E_{oy}$
1. $\Delta \phi = (\frac{1}{2} + n)\pi$

$$
\begin{gather}
\frac{E_{y}}{E_{x}}= \frac{E_{oy}\cos{(\omega t - \beta z + \phi_x + \Delta \phi)}}{E_{ox}\cos{(\omega t - \beta z + \phi_x)}} = \pm\frac{E_{oy}}{E_{ox}} \,\tan{(\omega t - \beta z + \phi_x)}
\end{gather}
$$

thus,

$$
\begin{gather}
\phi = \tan^{-1}{\frac{E_y}{E_x}}=\pm(\omega t - \beta z + \phi_x)
\implies \text{circular}
\end{gather}
$$

- necessarily perpendicular


### Elliptical Polarization


- if $\Delta \phi > 0$,  $E_y$ leads $E_x$, (left-handed)
- if $\Delta \phi < 0$,  $E_y$ lags $E_x$, (right-handed)


---

## Reflection and Transmission


### Snell's Law

#### lossless

$$
\begin{gather}
k_i \sin{\theta_i} = k_r \sin{\theta_r}=k_t\sin{\theta_t}
\end{gather}
$$


#### lossy

$$
\begin{gather}
\gamma_i \sin{\theta_i} = \gamma_r \sin{\theta_r}=\gamma_t\sin{\theta_t}
\end{gather}
$$

##### True Angle of Refraction

Since $\gamma$ is complex, $\sin \theta_t$ and $\sin \theta_r$ is basically complex as well.

![](_attachments/Pasted%20image%2020220423201057.png)

Thus

$$
\begin{align}
\vec \gamma_t \cdot \vec r
&= \gamma_t \sin{\theta_t}\,x + \gamma_t \cos{\theta_t}\,z
\\\\
&=
\Re\big[ \gamma_t \sin{\theta_t}\big]x +
\Re\big[ \gamma_t \cos{\theta_t}\big]z +
j\bigg[
\Im\big[ \gamma_t \sin{\theta_t}\big]x +
\Im\big[ \gamma_t \cos{\theta_t}\big]z
\bigg]
\end{align}
$$

- True angle of refraction $\psi_\beta$

$$
\begin{gather}
\psi_\beta = \tan^{-1}{\frac{\Im\big[\gamma_t\sin\theta_t\big]}{\Im\big[\gamma_t\cos\theta_t\big]}}
\end{gather}
$$

----

### Polarization

#### Parallel Polarization

- $E$ is parallel to surface formed by ($k_i, k_r, k_t$)

![](_attachments/Pasted%20image%2020220423203523.png)

at $z=0$,

solve, 

$$
\left\{
\begin{align}
&E_{i0}\cos{\theta_i} + E_{r0}\cos{\theta_r} = E_{t0}\cos{\theta_t}
\\\\
&H_{i0} - H_{r0} = H_{t0}
\end{align}\right.
$$

then we have

$$
\begin{gather}
\Gamma_{\parallel}=\frac{E_{r0}}{E_{i0}}=\frac{\eta_2\cos{\theta_t}-\eta_1\cos{\theta_i}}{\eta_2\cos{\theta_t}+\eta_1\cos{\theta_i}}
\\\\
\tau_{\parallel}=\frac{E_{t0}}{E_{i0}}=\frac{2\eta_2\cos{\theta_i}}{\eta_2\cos{\theta_t}+\eta_1\cos{\theta_i}}
\end{gather}
$$

#### Perpendicular Polarization

![](_attachments/Pasted%20image%2020220423204058.png)

at $z=0$,

solve, 

$$
\left\{
\begin{align}
&-H_{i0}\cos{\theta_i} + H_{r0}\cos{\theta_r} = -H_{t0}\cos{\theta_t}
\\\\
&E_{i0} + E_{r0} = E_{t0}
\end{align}\right.
$$

then we have

$$
\begin{gather}
\Gamma_{\bot}=\frac{E_{r0}}{E_{i0}}=\frac{\eta_2\cos{\theta_i}-\eta_1\cos{\theta_t}}{\eta_2\cos{\theta_i}+\eta_1\cos{\theta_t}}
\\\\
\tau_{\bot}=\frac{E_{t0}}{E_{i0}}=\frac{2\eta_2\cos{\theta_i}}{\eta_2\cos{\theta_i}+\eta_1\cos{\theta_t}}
\end{gather}
$$

---

### Brewster Angle

- Denote as $\theta_{B\parallel}$

- a special $\theta_i$ that make no reflection.

For nonmagnetic medium ($\mu_r = 1$), only exists at **parallel polarization**.

$$
\begin{gather}
\Gamma_{\parallel} = \frac{\eta_2\cos{\theta_t}- \eta_1\cos{\theta_i}}{\eta_2\cos{\theta_t}+ \eta_1\cos{\theta_i}} = 0
\\\\
\implies
\eta_2 \cos{\theta_t} = \eta_1\cos{\theta_{B\parallel}}
\end{gather}
$$

$$
\begin{gather}
\\
\eta_2^{2} \cos^{2}{\theta_t} = \eta^{2}_1 \cos^{2}{\theta_{B\parallel}}
\\\\
\frac{\mu_2}{\varepsilon_2}\left(1-\frac{\mu_1\varepsilon_1}{\mu_2\varepsilon_2}\sin^{2}{\theta_{B\parallel}}\right)
=
\frac{\mu_1}{\varepsilon_1}\left(1-\sin^{2}{\theta_{B\parallel}}\right)
\end{gather}
$$

for non-magnetic medium $\mu_1 = \mu_2 = \mu_0$

$$
\begin{align}
\\
\implies
\sin^{2}{\theta_{B\parallel}}
&=
\frac{\displaystyle{ \frac{\mu_2}{\varepsilon_2}-\frac{\mu_1}{\varepsilon_1}}}
{\displaystyle {
\frac{\mu_1\varepsilon_1}{\mu_2\varepsilon_2}\frac{\mu_2}{\varepsilon_2} -\frac{\mu_1}{\varepsilon_1} 
}}
\\\\
&=
\frac{\displaystyle{ \frac{\mu_0}{\varepsilon_2}-\frac{\mu_0}{\varepsilon_1}}}
{\displaystyle {
\frac{\varepsilon_1}{\varepsilon_2}\frac{\mu_0}{\varepsilon_2} -\frac{\mu_0}{\varepsilon_1} 
}}
\\\\
&=
\frac{\displaystyle{ \varepsilon_1- \varepsilon_2}}
{\displaystyle {
\frac{\varepsilon_1^{2}}{\varepsilon_2}-\varepsilon_2
}}
\\\\
&=
\frac{\displaystyle{ \varepsilon_1- \varepsilon_2}}
{\displaystyle {
\frac{1}{\varepsilon_2}(\varepsilon_1^{2}-\varepsilon_2^{2})
}}
\\\\
&=
\boxed{
\frac{\varepsilon_2}
{\displaystyle {
\varepsilon_1 + \varepsilon_2
}}}
\end{align}
$$

then,

$$
\begin{gather}
\tan{\theta_{B\parallel}} = \sqrt\frac{\varepsilon_2}{\varepsilon_1}
\end{gather}
$$


----

### Normal Incidence

#### Power

- incident power

$$
\begin{gather}
P_i = \frac{1}{2}\Re\bigg[E_{i0}H_{i0}^{*}\bigg]
=\frac{1}{2}\frac{|{E_{i0}}|^{2}}{\Re\big[\eta_1^{*}\big]} 
\end{gather}
$$

- reflected power

$$
\begin{align}
P_r
&= -\frac{1}{2}\Re\bigg[E_{r0}H_{r0}^{*}\bigg]
\\\\
&=-\frac{1}{2}\frac{|\Gamma {E_{i0}}|^{2}}{\Re\big[\eta_1^{*}\big]} 
\\\\
&= - |\Gamma|^{2}P_i
\end{align}
$$

<br>

$$
\begin{gather}
E_{ts} = E_{t0}e^{-\gamma_2 z}=E_{i0}(1+\Gamma)e^{-\gamma_2 z}
\\\\
H_{ts} = H_{t0}e^{-\gamma_2 z} = \frac{E_{t0}}{\eta_2}e^{-\gamma_2 z}
= \frac{E_{i0}(1+\Gamma)}{\eta_2}e^{-\gamma_2 z}
\\\\
= \frac{H_{i0}\,\eta_1(1+\Gamma)}{\eta_2}e^{-\gamma_2 z}
= H_{i0}(1-\Gamma)e^{-\gamma_2 z}
\end{gather}
$$

then,

$$
\begin{align}
P_t 
&= \frac{1}{2}\Re\bigg[E_{t0}H_{t0}^{*}\bigg]
\\\\
&= P_i\,(1+\Gamma)(1-\Gamma^{*})
\\\\
&\overset{\alpha=0}{=}P_i(1-|\Gamma|^{2})
\end{align}
$$

!!! Note "Note"
    
    compare to [$\text{equation (6)}$](Transmission%20Line#^equ-6)
    
    $$
    \begin{align}
    P_i &\leftrightarrow P^{+}
    \\\\
    P_r &\leftrightarrow P^{-}
    \\\\
    P_t &\leftrightarrow P
    \\\\
    P_i+P_r=P_t &\leftrightarrow P^{+}+P^{-}=P
    \end{align}
    $$
    
