## Binomial and Negative Binomial

### Binomial Distribution

- distribution of number of success $r$ given number of trails $n$

$$
\begin{gather}
P(X=r)=\binom{n}{r}p^{r}(1-p)^{n-r}
\end{gather}
$$

### Negative Binomial Distribution

- distribution of number of trails $n$ given number of success $r$
    - namely, distribution of number of failures $k$ given number of success $r$
    
$$
\begin{gather}
P(X=n)=\binom{n-1}{r-1}p^{r}(1-p)^{n-r}
\end{gather}
$$

## Geometric Distribution

- number of trails $n$ until success

$$
\begin{gather}
P(X=n)=p(1-p)^{n-1}
\end{gather}
$$

### Generation Method

- CMF

$$
\begin{gather}
F(i) = \sum\limits_{n=1}^{i}{p\,q^{n-1}}=p\,\frac{1-q^{i-1}}{1-q}=1-q^{i-1}
\end{gather}
$$

let

$$
\begin{gather}
U=G(i) = 1-F(i) = q^{i-1}
\end{gather}
$$

thus

$$
\begin{gather}
i-1 = \log_qU
\\\\
\implies
G^{-1}(U) = \lfloor {\log_{q}{U}} \rfloor + 1
\end{gather}
$$

## Poisson Distribution

- $\text{Pois}(\lambda)$
- Considering events occur with rate $r$, with time interval $t$, there would be average number of events $rt$ per interval.
	- say that $\lambda = rt$, expected rate of occurrences
	- Split the time interval $t$ in to $N$ pieces and make the sub-interval $t'$ very small(i.e. $N$ very large).
	- $t' = t/N \text{ where } N \to \infty\quad \text{then } \quad r\,t' \ll 1$<br>
	- if $rt' \ll 1$, it approximates to do one Bernoulli trails in each time interval $t'$.
	- $\text{Pois}(\lambda) \equiv B(n=N,\, p=rt'=\lambda/N)\equiv B(n \to \infty, p \to 0)$
- $E_{X\sim Pois}\big[X\big] = \lambda = np = rt$
- $X \sim \text{Pois}(\lambda )$, indicates $X$ is the number of events occurs in **unit** time interval (and the event rate is $\lambda$).

$$
\begin{align}
P\{X=i\} &= \binom{n}{i}p^{i}\,(1-p)^{n-i}
\\\\
&= \binom{\cancel{n}}{i} \frac{\lambda ^{i}}{\cancel {n^{i}}}\,(1-p)^{n-i}
\\\\
&= \frac{\lambda^{i}}{i!}(1-p)^{n-i}
\\\\
&= \frac{\lambda^{i}}{i!}(e^{-p})^{n}
\\\\
&= \frac{\lambda^{i}}{i!}e^{-\lambda}
\end{align}
$$

!!! hint "hint"
    
    $$
    \begin{align}
    \lim_{x\to0}e^{x}=e^{0}\left(1+\frac{x}{1!}+\frac{x^{2}}{2!}\right)\approx1+x
    \end{align}
    $$
    

### Generation Method

1. Generate several exponential random variable $E_i \sim \text{Exp}(\lambda )$
2. until $E_1 +E_2 + \cdots + E_i \ge 1 >E_1 + E_2 + \cdots + E_{i-1}$

---

## Exponential Distribution

- time between events in Poisson process
- continuous analogue of the **geometric distribution**.

- **CDF**
    - take $Y \sim \text{Pois}(\lambda )$
    - split unit time interval to $1/N$, where $N$ is large
    - then $p=\lambda /N$
    
$$
\begin{gather}
P(X \ge k) = (1-p)^{kN} = e^{-kNp} = e^{-\lambda k}
\\\\
F(x) = 1-P(X\ge x) = 1- e^{-\lambda x}
\end{gather}
$$

- **PDF**

$$
\begin{gather}
f(x) = F'(x) = e^{-\lambda x}
\end{gather}
$$

### Generation Method

Since,

$$
\begin{gather}
F(x) = 1 - e^{-\lambda x }
\\\\
\implies
F^{-1}(U) = \frac{\ln (1-U)}{-\lambda}
\end{gather}
$$

identically,

$$
\begin{gather}
F^{-1}(U) = F^{-1}(1-U) = -\frac{1}{\lambda}\ln U
\end{gather}
$$

----

## Beta Distribution

