---
creation date: 2022/01/08 17:57
author: Smark Lin
---

# Transmission Line


## Transmission-Line Equations

First define
- $ℭ$ : inductance per unit length
- $𝔏$ : inductance per unit length

### Lossless Transmission Lines

$$
\left\{
\begin{align}
\frac{\partial  V}{\partial z}&=-𝔏\frac{\partial I}{\partial t}
\\\\
\frac{\partial I}{\partial z}&= -ℭ\frac{\partial V}{\partial t}
\end{align}\right.
$$


!!! tip "tip"
    
    These equation can be easily derived from the definition of capacitance and capacitance in electric circuit theorem
    
    $$
    \begin{gather}
    v = L\frac{di}{dt}
    \\\\
    i= C\frac{dv}{dt}
    \end{gather}
    $$


Similar to the derivation in EM wave equation, we can obtain the wave equation form

$$
\left\{
\begin{align}
\frac{\partial^{2} V}{\partial z^{2}} &= 𝔏ℭ\frac{\partial^{2} V}{\partial t^{2}}
\\\\
\frac{\partial^{2}I}{\partial z^{2}} &= 𝔏ℭ\frac{\partial^{2} I}{\partial t^{2}}
\end{align}\right.
$$

Thus we have the wave velocity

$$
\begin{gather}
u = \frac{1}{\sqrt{𝔏ℭ}}
\end{gather}
$$

Comparing to the velocity of EM wave, it tell us the important relation that

$$
\begin{gather}
\boxed{
𝔏ℭ = \mu\varepsilon
}
\end{gather}
$$

Furthermore, considering the phasor form of transmission-line equation, we have

$$
\begin{align}
\frac{d^{2}V_s}{dz^{2}} = (j\beta)^{2}\,V_s
\\\\
\frac{d^{2}I_s}{dz^{2}} = (j\beta)^{2}\,I_s
\end{align}
$$

in which

$$
\begin{gather}
(j\beta)^{2} = (j\omega)^{2}𝔏ℭ
\\\\
\implies
\boxed{
\beta = \omega\sqrt{𝔏ℭ} = \frac{\omega}{u}
}
\end{gather}
$$

#### General Solutions

$$
\begin{align}
V(z, t) &= V^{+}(z-ut)+V^{-}(z+ut)
\\\\
I(z, t) &= I^{+}(z-ut)+I^{-}(z+ut)
\end{align}
$$

Similarly, we have the characteristic impedance $Z_0$

$$
\begin{gather}
Z_0 = \sqrt\frac{𝔏}{ℭ}=\frac{V^{+}}{I^{+}}=-\frac{V^{-}}{I^{-}}
\end{gather}
$$

----

### General Transmission LInes

Revise the transmission-line equation in the lossless case into

$$
\left\{
\begin{align}
-\frac{\partial  V}{\partial z}&=RI+L\frac{\partial I}{\partial t}
\\\\
-\frac{\partial I}{\partial z}&= GV+C\frac{\partial V}{\partial t}
\end{align}\right.
\qquad\overset{𝔉ourier}{\iff}\qquad
\left\{
\begin{aligned}
\frac{d  V_s}{d z}&=-(R+ j\omega L)I_s
\\\\
\frac{d \,I_s}{d z}&= -(G+j\omega C)V_s
\end{aligned}\right.
$$


Also, in the form of wave equations

$$
\begin{gather}
\frac{d^{2}V_s}{dz^{2}} = \gamma^{2}V_s
\\\\
\frac{d^{2}I_s}{dz^{2}} = \gamma^{2}I_s
\end{gather}
$$

in which $\gamma$ is also called as **propagation constant**.

$$
\begin{gather}
\gamma = \sqrt{(R+j\omega L)(G+j\omega C)} = \alpha+j\beta
\end{gather}
$$

#### General Solutions

solve the wave equations above

$$
\begin{align}
V_s &= V_0^{+}e^{-\gamma z}+V_0^{-}e^{\gamma z}
\\\\
I_s &= I_0^{+}e^{-\gamma z}+I_0^{-}e^{\gamma z}
\\\\
&= \frac{V_0^{+}}{Z_0}e^{-\gamma z}-\frac{V_0^{+}}{Z_0}e^{\gamma z}
\end{align}
$$

and the corresponding time domain form

$$
\begin{align}
V(z, t) &= |V_0^{+}|e^{-\alpha z}\cos(\omega t- \beta z + \phi^{+}) +  |V_0^{-}|e^{\alpha z}\cos(\omega t+ \beta z + \phi^{-})
\\\\
I(z, t) &= |I_0^{+}|e^{-\alpha z}\cos(\omega t- \beta z + \varphi^{+}) +  |I_0^{-}|e^{\alpha z}\cos(\omega t+ \beta z + \varphi^{-})
\end{align}
$$

- power attenuation

$$
\begin{align}
\text{attenuation const} &= \alpha \quad\text{(NP/m)}
\\\\
\text{power attenuation} &= 20 \log{e^{\alpha}}\quad\text{(dB/m)}
\end{align}
$$

thus, 

$$
\begin{gather}
1\,\text{NP} = 20\log{e^{1}} = 8.69 \, \text{dB}
\end{gather}
$$

---

#### Power

- time-average power

$$
\begin{align}
P(z) &= \frac{1}{2}\text{Re}\bigg[VI^{*}\bigg]
\\\\
&= \frac{1}{2}\text{Re}\bigg[V_0^{+}(1+\Gamma)\left(\frac{V_0^{+}}{Z_0}\right)^{*}(1-\Gamma^{*})\bigg]
\\\\
&= \frac{1}{2}\text{Re}\bigg[\frac{{V_0^{+}}^{2}}{Z_0}(1+\Gamma)(1-\Gamma^{*})\bigg]
\\\\
&=\frac{1}{2}\frac{\left|V_0^{+}\right|^{2}}{Z_0}(1-|\Gamma|^{2})
\tag 6
\end{align}
$$

^equ-6

<br>

$$
\implies
\begin{dcases}
P^{+}=\frac{1}{2}\left|V_0^{+}\right||I_0^{+}|\,e^{+ 2\alpha z}
\\\\
P^{-}=\frac{1}{2}\left|V_0^{-}\right||I_0^{-}|\,e^{- 2\alpha z}
\end{dcases}
$$

- power loss


$$
\begin{gather}
\text{PL} =P(0)-P(z)
\end{gather}
$$

---

### Distortionless

- conditions

$$
\begin{gather}
\frac{R}{L} = \frac{G}{C}
\end{gather}
$$

thus, we have the propagation constant $\gamma$

$$
\begin{align}
\gamma &= \sqrt{(R+j\omega L)(G+ j\omega C)}
\\\\
&= \sqrt{LC} \sqrt{\left(\frac{R}{L} +j\omega\right)\left(\frac{G}{C} +j\omega\right)}
\\\\
&= \sqrt{LC} \left(\frac{R}{L} +j\omega\right)
\\\\
&=  \sqrt{RG} + j\omega\sqrt{LC}
\end{align}
$$

and the characteristic impedance $Z_0$

$$
\begin{align}
Z_0 &= \sqrt{\frac{R+j\omega L}{G+ j\omega C}}
\\\\
&= \sqrt {\frac{R(1+j\omega\frac{L}{R})}{G(1+j\omega(\frac{C}{G}))}}
\\\\
&= \sqrt{\frac{R}{G}}
= \sqrt{\frac{L}{C}}
\end{align}
$$


---


## Standing Wave Ratio

- aka $\text{SWR}$

### Reflection

![](_attachments/Pasted%20image%2020220306180557.png)

- voltage reflection coefficient

$$
\begin{gather}
\Gamma(z) = \frac{V^{-}(z)}{V^{+}(z)}
=\frac{V_0^{-}e^{+\gamma z}}{V_0^{+}e^{-\gamma z}}
=\frac{V_0^{-}}{V_0^{+}}e^{+2\gamma z}
\end{gather}
$$

- current reflection coefficient

$$
\begin{gather}
\Gamma_I(z)=\frac{I^{-}}{I^{+}}=-\frac{V^{-}}{V^{+}}=-\Gamma(z)
\end{gather}
$$

- $\Gamma_L$
<br>
Let's define the impedance from load $Z_L=V_L/I_L$

$$
\begin{gather}
V_0^{+}e^{-\gamma ℓ}+V_0^{-}e^{+\gammaℓ}=\frac{Z_L}{Z_0}(V_0^{+}e^{-\gammaℓ}-V_0^{-}e^{+\gamma ℓ})
\\\\
\implies
(Z_0-Z_L)V_0^{+}e^{-\gamma ℓ}=-(Z_L+Z_0)V_0^{-}e^{+\gamma ℓ}
\\\\
\implies
\boxed{
\Gamma_L=\frac{V_0^{-}e^{+\gamma ℓ }}{V_0^{+}e^{-\gamma ℓ}}=\frac{V_0^{-}}{V_0^{+}}e^{+2\gamma ℓ }=\frac{Z_L-Z_0}{Z_L+Z_0}
}
\tag{2}
\end{gather}
$$

^equ-2

We can further write the reflection coefficient from load at $d$ as

$$
\begin{align}
\Gamma(d)= \Gamma_{L}\,e^{-2\gamma d}
\tag 3
\end{align}
$$

^equ-3

!!! tip "tips"
    from [$\text{equation (3-1)}$](#^equ-3-1),
    
    $$
    \begin{gather}
    Z(z) = Z_0\frac{1+\Gamma}{1-\Gamma}
    \\\\
    \implies
    Z(z) - Z(z)\,\Gamma = Z_0+Z_0\,\Gamma
    \\\\
    \implies
    \boxed{
    \Gamma(z) = \frac{Z(z) - Z_0}{Z(z) + Z_0}
    }
    \end{gather}
    $$
    
    we can also derive [$\text{equation (2)}$](#^equ-2) by virtue of this equation
    
    $$
    \begin{gather}
    \Gamma_L = \Gamma(z=ℓ) = \Gamma(d=0) = \frac{Z(z=ℓ)-Z_0}{Z(z=ℓ)+Z_0}
    \end{gather}
    $$
    
    Furthermore, at the generator-end (i.e. $z=0$), we have
    
    $$
    \begin{gather}
    \Gamma(z=0)=\Gamma(d=ℓ)=\frac{Z_{in}-Z_0}{Z_{in} + Z_0}
    \end{gather}
    $$

---

### impedance

- Line impedance at $z$, $Z(z)$

$$
\begin{align}
Z(z) &= \frac{V_s}{I_s}
\\\\
&=
Z_0\frac{V_0^{+}e^{-\gamma z}+V_0^{-}e^{+\gamma z}}{V_0^{+}e^{-\gamma z}-V_0^{-}e^{+\gamma z}}
= Z_0\frac{1+\displaystyle \frac{V_0^{-}}{V_0^{+}}e^{+2\gamma z}}{1-\displaystyle \frac{V_0^{-}}{V_0^{+}}e^{+2\gamma z}}
\\\\
&=
Z_0\frac{1+\Gamma(z)}{1-\Gamma(z)} \tag{3-1}
\end{align}
$$

^equ-3-1

- impedance at load $Z_L$

$$
\begin{align}
Z_L &= Z(z=ℓ) = Z_0\frac{1+\Gamma(z=ℓ)}{1-\Gamma(z=ℓ)}
\\\\
&= Z_0\frac{1+\Gamma_L}{1-\Gamma_L}
\end{align}
$$

- input impedance $Z_{in}$
<br>

$$
\begin{align}
Z_{in} &= Z(z=0) = Z_0\frac{1+\Gamma(z=0)}{1-\Gamma(z=0)}
\\\\
&= Z_0\,\frac{1+ \displaystyle \frac{V_0^{-}}{V_0^{+}}}{1- \displaystyle \frac{V_0^{-}}{V_0^{+}}}
\\\\
&= Z_0\,\frac{1+ \Gamma_L\,e^{-2\gamma ℓ}}{1- \Gamma_L\,e^{-2\gamma ℓ}}
\end{align}
$$

from [$\text{equation (2)}$](#^equ-2) we have 

$$
\begin{align}
Z_{in} 
&= Z_0\,\frac{1+ \Gamma_L\,e^{-2\gamma ℓ}}{1- \Gamma_L\,e^{-2\gamma ℓ}} 
\\\\
&= Z_0\,\frac{1+ \displaystyle \frac{Z_L-Z_0}{Z_L+Z_0}\,e^{-2\gamma ℓ}}{1- \displaystyle \frac{Z_L-Z_0}{Z_L+Z_0}\,e^{-2\gamma ℓ}} 
\\\\
&= Z_0\,\frac{Z_L+Z_0+ (Z_L-Z_0)\,e^{-2\gamma ℓ}}{Z_L+Z_0- (Z_L-Z_0)\,e^{-2\gamma ℓ}} 
\\\\
&= Z_0\,\frac{Z_L(1+e^{-2\gamma ℓ})+Z_0(1-e^{-2\gamma ℓ})}{Z_L(1-e^{-2\gamma ℓ})+Z_0(1+e^{-2\gamma ℓ})} 
\\\\
&= Z_0\,\frac{Z_L+Z_0\,\tanh{\gammaℓ}}{Z_L\,\tanh{\gammaℓ}+Z_0} 
\\\\
&= 
\boxed{
Z_0\,\frac{Z_L+Z_0\,\tanh{\gammaℓ}}{Z_0+Z_L\,\tanh{\gammaℓ}} 
}
\\\\
&\xlongequal{\alpha = 0} 
Z_0\,\frac{Z_L+jZ_0\,\tan{\betaℓ}}{Z_0+jZ_L\,\tan{\betaℓ}} 
\end{align}
$$

---

### Complex form

As usual, we can represent $\Gamma$ with complex coordinate.

$$
\begin{gather}
\Gamma = |\Gamma |\,\angle{\Gamma}
\end{gather}
$$

Consider [$\text{equation (3)}$](#^equ-3), we further have

$$
\begin{align}
\boxed{
\Gamma=\Gamma_L\,e^{-2\alpha d}\,e^{-j2\beta d}
}
\end{align}
$$


Besides, we can rewrite $V_s, I_s$ as

$$
\begin{align}
|V_s| &= \left|V^{+}\right||1+\Gamma|
\\\\
|I_s| &= \left|I^{+}\right||1-\Gamma|
\end{align}
$$

---

### Standing Wave Ratio for Lossless


$$
\begin{align}
\text{VSWR} &\equiv \frac{V_{max}}{V_{min}} = \frac{|V_0^{+}||1+\Gamma|_{max}}{|V_0^{+}||1+\Gamma|_{min}}
\\\\
&= \frac{1+ |\Gamma|}{1- |\Gamma|}
\xlongequal{\alpha\,=\,0}\frac{1+ |\Gamma_L|}{1- |\Gamma_L|}
\end{align}
$$

and similarly for $\text{ISWR}$,

$$
\begin{gather}
\frac{I_{max}}{I_{min}}=\frac{V_{max}}{V_{min}}=\text{SWR}
\end{gather}
$$

according to [$\text{equation (5)}$](#^equ-5),

$$
\begin{align}
z=\frac{1+\Gamma}{1-\Gamma}=r+jx
\end{align}
$$

we can obtain $\text{SWR}$ by picking the point that $\angle\Gamma = 0$, then

$$
\begin{align}
\text{SWR} = \frac{1+|\Gamma|}{1-|\Gamma|}= r+j0=r
\end{align}
$$

---

## Smith Chart

Smith chart help us quickly obtain the normalized impedance $Z$ w.r.t $Z_0$.


$$
\begin{align}
Z= z\times Z_0 = (r+jx)\times Z_0
\end{align}
$$

then, we can have the normalized impedance $z$

$$
\begin{align}
z=r+jx= \frac{Z}{Z_0}=\frac{1+\Gamma}{1-\Gamma}
\tag 5
\end{align}
$$

^equ-5

- $r$-circles
<br>
![](_attachments/Pasted%20image%2020220313154414.png)

- $x$-circles
<iframe src="https://www.desmos.com/calculator/wnjszznh1w?embed" width="500" height="500" style="padding: 70px" frameborder=0></iframe>

### Admittance Chart

for the admittance of transmission line, we can easily obtain the relationship of admittance and impedance.

$$
\begin{gather}
y=\frac{Y}{Y_0}=\frac{1}{z}=\frac{1-\Gamma}{1+\Gamma}
\\\\
\implies
y=z\,e^{-j\pi} \tag 4
\end{gather}
$$

^equ-4

the [$\text{equation (4)}$](#^equ-4) tell us that we can obtain the normalized admittance $y$ with Smith chart by simply rotate the corresponding $z$ with $180\degree$.

