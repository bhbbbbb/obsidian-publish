## To Read

- [seq2seq for object detection](https://arxiv.org/pdf/2005.12872.pdf )

## some useful site
- [Feature Engineering](https://www.itread01.com/content/1542164169.html)

- [On the Relationship between Self-Attention and Convolutional Layers](https://arxiv.org/abs/1911.03584)

- [Restructuring of deep neural
network acoustic models with singular value decomposition.
](https://www.microsoft.com/en-us/research/wp-content/uploads/2013/01/svd_v2.pdf)

- Feature Disentangle
	- arxiv.org/abs/1904.05742
	- arxiv.org/abs/1804.02812
	- arxiv.org/abs/1905.05879


----

## Back Propagation

let say Error Function $E$

$$
\begin{align}
E &= \frac{1}{2}(y-d)^{2}
\\\\
&= \frac{1}{2}(\sigma(v)-d)^{2}
\\\\
&= \frac{1}{2}\bigg(\sigma\left(w^{T}y^{h}\right)-d\bigg)^{2}
\end{align}
$$

in which
- $y$ : the output value
- $d$ : ground-truth value
- $w^{T}$ : $[w_1\, w_2\, \dots\, w_i]$: last weights for the output

then


$$
\begin{array}{}
\displaystyle\frac{\partial E}{\partial w_i} &=
& \bigg(\sigma\left(w_i\,y_i^{h}\right)-d\bigg) &{\bigg(\sigma'\left(w_iy_i^{h}\right)\bigg)} & y_i^{h}
\\\\
&=
& \left(\sigma(v)-d\right) &
\sigma(v)(1-\sigma(v)) & y_i^{h}
\end{array}
$$

## MLE 
- https://www.ycc.idv.tw/deep-dl_3.html

- Maximum Likelihood Estimation

$$
\begin{align}
\theta_{MLE} &= \arg\max_\theta{\bigg[p(X|\theta)\bigg]}
\\\\
&= \arg\max_\theta{\bigg[\ln {p(X|\theta)\bigg]}}
\\\\
&= \arg\max_\theta{\bigg[E_{x\sim p_{data}}\big[\ln {p(x|\theta)\big]\bigg]}}
\end{align}
$$


## MAP

- Maximum A Posterior
- evidence $X$, parameters $\theta$
- $p(X \,| \,\theta)$: Likelihood
- $p(\theta)$: Prior Probability, which is independent to $D$
- $p(\theta \,|\, X)$: Posterior Probability

By Bayes' law,

$$
\begin{gather}
P(\theta\,|\,X)=\frac{P(X|\theta)\,P(\theta)}{P(X)}
\end{gather}
$$


In optimization task, we care about parameters $\theta$, so we can simply ignore $P(X)$ when it come to MAP.

$$
\begin{align}
\theta_{MAP} 
&= \arg\max_\theta \bigg[{P(\theta|X)}\bigg]
\\\\
&= \arg\max_\theta \bigg[
{\frac{P(X|\theta)\,P(\theta)}{P(X)}}
\bigg]
\\\\
&= \arg\max_\theta \bigg[
{P(X|\theta)\,P(\theta)}
\bigg]
\\\\
&= \arg\max_\theta \bigg[
{\ln P(X|\theta)+ \ln P(\theta)}
\bigg]
\end{align}
$$

- Uniform Distribution ⇒ $\ln{p(\theta \ | \ m)} =0$
(like MLE that assume $\theta$ is uniform distribution)

$$
\begin{align}
\theta_{MAP} 
&= \arg\max_\theta \bigg[
{\ln P(X|\theta)+ \ln P(\theta)}
\bigg]
\\\\
&= \arg\max_\theta \bigg[
{\ln P(X|\theta)}
\bigg]
\\\\
&= \theta_{MLE}
\end{align}
$$

- Normal Distribution ⇒ $\ln{p(\theta \ | \ m)} \propto \theta^{2}$ &emsp; (L2 Regulation)
- Laplace Distribution ⇒ $\ln{p(\theta \ | \ m)} \propto \theta$ &emsp; (L1 Regulation)


---

## Cross Entropy

### Entropy

- for an distribution $p$

$$
\begin{gather}
H(p)=E_{x\sim p}\big[-\ln{p(x)}\big]
\end{gather}
$$

!!! note "note"
    
    $$
    \begin{gather}
    E_{x\sim p}[f(x)]= \int_x{p(x)f(x)\,dx}
    \end{gather}
    $$


### KL Divergence

- difference of given distribution $q$ to the target distribution $p$
- $(\text{target's entropy}) - (\text{cross entropy})$

$$
\begin{align}
D_{KL}(p||q)&=-E_{x\sim p}\big[\ln q(x) - \ln{p(x)}\big]
\\\\
&= H(p, q) - H(p)
\end{align}
$$


### Cross Entropy

$$
\begin{align}
H(p, q) = E_{x\sim p}\big[-\ln q(x)\big]
\end{align}
$$

---

## VAE

- Gaussian Mixture Model

%%![](_attachments/Pasted%20image%2020220421143027.png)%%

Here we define a normal distribution $p(z)$ (There is no need to be normal.), 
then we can express the complex distribution $p(x)$ as

$$
\begin{gather}
p(x) = \int_z{p(z)\,p(x|z)\,dz}
\end{gather}
$$

However, $p(x)$ is intraceable

<img src="app://local/D:/Documents/My_Obsidian/ML/_attachments/Pasted%20image%2020220421143027.png?1650522627220"
	 style="background-color: white;" width="480">

then , try maximize the likelihood,

$$
\begin{align}
\theta_{MLH} &= \arg \max_{\theta} \bigg[\ln{p(x)}\bigg]
\\\\
&= \arg \max_{\theta} \bigg[
\int_z{\left(\ln{p(z)}+\ln{p(x|z)}\right)\,dz}
\bigg]
\\\\
&= \arg \max_{\theta} \bigg[
\int_z{\ln{p(z)}\,dz} + \int_z{\ln{p(x|z)}\,dz}
\bigg]
\\\\
&= \arg \max_{\theta} \bigg[
1 + \int_z{\ln{p(x|z)}\,dz}
\bigg]
\\\\
&= \arg \max_{\theta} \bigg[
\int_z{\frac{}{f}\,dz}
\bigg]
\end{align}
$$

---

## Suphx

- [Building a Computer Mahjong Player via Deep Convolutional Neural Networks](https://arxiv.org/abs/1906.02146)

- Saliency Map
	- SmoothGrad (https://arxiv.org/abs/1706.30825 )
	- [Integrated gradient (IG)](https://arxiv.org/abs/1611.02639)

### ML Explanation

- Local Explanation($\sqrt{}$)<br> 
Why do u think this image is a cat
- Global Exp.<br>
What does a "cat" look like

- LIME(Local Interpretable Model-Agnostic Explanations)


## AlphaGo

- tabula rasa
---

## Self Attention

![](_attachments/Pasted%20image%2020220215024345.png)

$$
\begin{align}
Q&=
\begin{bmatrix}
q1 & q2 & \cdots
\end{bmatrix}
\\\\
I&=
\begin{bmatrix}
a1 & a2 & \cdots
\end{bmatrix}  \qquad(\text{input})
\\\\
Q&=W^{q}\,I
\\\\
K&=W^{k}\,I
\\\\
V&=W^{v}\,I
\end{align}
$$

![](_attachments/Pasted%20image%2020220215024813.png)

$\alpha_{1, 2}$ is attention score of $q_1$ with $k_2$, (by **dot product**)


i.e.

$$
\begin{gather}
\mathbf{\alpha_1}=
\begin{bmatrix}
\alpha_{1, 1} \\
\alpha_{1, 2} \\
\alpha_{1, 3} \\
\vdots
\end{bmatrix}
\qquad
\mathbf{K}=
\left[
\begin{matrix}
k_{1} & k_{2} & k_{3} & \cdots
\end{matrix}
\right]
\\\\
\alpha_1 = K^{T}\, q_1
\end{gather}
$$

Let expand $\alpha_i$ to $[\alpha_1, \alpha_2, \dots]$

$$
\begin{gather}
\begin{bmatrix}
\alpha_1 & \alpha_2 & \cdots
\end{bmatrix}
=\mathbf{K^{T}} \,
\begin{bmatrix}
q_1 & q_2 & \cdots
\end{bmatrix}
\iff
\mathbf{A} =\mathbf{K^{T}} \, \mathbf{Q}
\end{gather}
$$

as we have the score of attention, it is intuitive to think the output (e.g. $b_1$) is 

$$
\begin{gather}
b_1 \propto 
\begin{bmatrix}
a_1 & a_2 & a_3 & \cdots 
\end{bmatrix}
\begin{bmatrix}
\alpha_{1, 1} \\
\alpha_{1, 2} \\
\alpha_{1, 3} \\
\alpha_{1, 4} \\
\end{bmatrix}
\iff
\mathbf O \propto \mathbf I \, \mathbf A
\end{gather}
$$

Thus we use $W^{v}$ to extract the feature of input $I$.

$$
\begin{gather}
O=VA=(W^{v}\,I)\,A
\end{gather}
$$

