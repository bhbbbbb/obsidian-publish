
Music Popularity Prediction

## Targets

- target &mdash; Predict Popularity with acoustic (low-level) feature only(?.

## Popularity

- Popularity can be described in various perspectives.[^1] :star:
<br>
![](https://dsm01pap006files.storage.live.com/y4mN8gKrELGHWXQdsF5khhb48eymFEAH0HMcVKE7m8JtLeDnm_HLSvn4NrD9HrBjmsqrOrRWqjDFVxM5CgdYCFYpPFdlYjxKLlfNV4izGe-0RH_ftUlXDWDC7oPx2w_ko1bEDhWsqqg5DjUfvMJA7nGtDAwt-1Qqmf1titTH5SJF_gHWZsrev7bWzUrSLKhwO6J?width=1054&height=497&cropmode=none)



- social factors sometimes play an important role in determining whether a song would be popular. (_Experimental study of inequality and unpredictability in an artificial cultural market_)

- either use **stream** or **rank** as criterion. :star:
	- currently use **stream**

---


## Data Sources


- track's statistics collected from Spotify: [kworb.net](kworb.net)

- audio source: 
	1. Spotfiy API preview (only 30s) (seems enough)
	2. ~~MIDI~~

---

## Methodology

- Train with low-level features only(?
	> Generic low-level features of songs, like the mel-spetrogram used in [4] and also throughout this work, may suffer from the “semantic gap” [15] and cannot lead to an accurate prediction model for a high-level concept such as hotness.
	[^2]

### Mixed Region :star:
- Tracks in single region are not sufficient for training. Thus, train with multi-region tracks may be more resonable.
- However, preference and population differ from regions. Region information have to be included.
	1. region cls_token
	2. region embeding


### Model

- Transformer

- targets
	- predict stream-time curve can yield any metrices described in [^1]
	 

#### MP2 (Music Propularity Prediction)


- predict **sumation** and **debut** as an regression problem
- fine-tuned MP2 model (Encoder) can be used in MP3 model.

- Encoder ([AST](https://arxiv.org/pdf/2104.01778v3.pdf))

- loss: MSE

#### MP3 (Music Propularity Period Prediction)

- with decoder
- Predict stream-time curve

#### Potential Augmentation

- use different preview clip of same tracks :star:
	- typically, there are more than one track for a song on Spotify (since they published by different album), and they may not have same preview clip.
- Specaugment :heavy_check_mark: 
- Rolling :heavy_check_mark:
- Random Gain :heavy_check_mark:
- pitch
- timbre



----

## Q 2 A


- seems no comparsion (people use different datasets)


## Q 2 findout

- ways to treat null values in streams

- same song different version (live version, studio version, covered version...)

- different TA (country, generation, ...)
	- [significant difference](https://www.semanticscholar.org/paper/Study-of-Chinese-and-UK-Hit-Songs-Prediction-Fan-Casey/3d4037c2817391df6c2b628bb8cef6ca39e57341)
	
- instrumental? (without singer)
	
- ~~Spotify youtube popularity relation?~~

- ~~quality of audio~~


---
## Misc.

- Positional Encoding (sum or concat?)
	- https://github.com/tensorflow/tensor2tensor/issues/1591

### Observation

- Xmax-related songs get and only get popular near Xmas
	- [All I Want for Christmas Is You](https://kworb.net/spotify/track/0bYg9bo50gSsH3LtXe2SQn.html)
	- [Last Christmas](https://kworb.net/spotify/track/2FRnf9qhLbvw8fu4IBXx78.html)
	- [Underneath the Tree](https://kworb.net/spotify/track/3nAp4IvdMPPWEH9uuXFFV5.html)


### KKBox Researches

#### [Revisiting the problem of audio-based hit song prediction using convolutional neural networks](https://arxiv.org/abs/1704.01280)


#### [Hit song prediction for pop music by siamese CNN with ranking loss](https://arxiv.org/abs/1710.10814)

---

### A_Multimodal_End-to-End_Deep_Learning_Architecture_for_Music_Popularity_Prediction

- audio and **lyrics**

---

### [Predicting Music Popularity Using Music Charts](https://www.researchgate.net/publication/341420234_Predicting_Music_Popularity_on_Streaming_Platforms) (Sep. 2019)

- target: whether a song is featured in Spotify's "Top 50" charts.

#### Strategies

- uses social network data.

- predict the success of a song by acoustic information of previous successful songs.

- use past data from charts to predict whether a song will be featured in the same chart in the future.

---

---

## Recycle Bin

### Track Popularity Dataset (seems unuseful)

- Musical track popularity mining dataset: Extension & experimentation,’’ N

http://mir.ilsp.gr/track_popularity.html


---

## Refs


[^1]: [Music popularity: Metrics, characteristics, and audio-based prediction,” IE](https://www.semanticscholar.org/paper/Music-Popularity%3A-Metrics%2C-Characteristics%2C-and-Lee-Lee/d1bb1d35ad3666f196e6292b1f782c10da6ba677)

[^2]:  HIT SONG PREDICTION FOR POP MUSIC BY SIAMESE CNN WITH RANKING LOSS Lang-Chi Yu∗ , Yi-Hsuan Yang∗ , Yun-Ning Hung∗ , Yi-An Chen† 