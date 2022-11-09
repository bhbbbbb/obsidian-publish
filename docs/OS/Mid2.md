## Communications in Client-Server Systems
### Socket

- low-level form of communication
- only allow an unstructured stream of bytes to be exchanged between the communicating threads.


### RPC
- aka Remote Procedure Calls

- higher level form of communication than Socket

- transmit parameters which are marshaled

- RPC abstracts procedure call between processes on networked systems.

- issues must be dealt in RPC
	- Differences in data representation on the client and server machines
	- the semantics of a call (messages are acted on exactly once or at most once)
	- Communication between a server and a client
### Pipes

---

## Concurrency

- two or more tasks can start, run and complete in overlapping time periods
- for example multitasking on single-core machine

## Parallelism

- at least two threads are executing simultaneously
- for example on a multi-core processor.

## Lightweight process
- LWP
- M:M and Two-level models require communication to maintain the appropriate number of kernel threads allocated to the application
- an intermediate data structure between the user thread and kernel thread

---
## Thread

| User-level thread                                                           | Kernel-level thread                                                             |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| It is managed by thread library in user space.                               | It is managed by kernel                                                         |
| Faster context switching                                                    | Slower context switching                                                        |
| Whole process will be blocked if one of threads calls blocking system call. | Whole process will not be blocked if one of threads calls blocking system call. |
| Better utilization on multiprocessors.                                      | No advantage on multiprocessors.                                                                                |

## Scheduling Algorithm
#### FCFS
- First-Come First-Served
- must be **non-preemptive**
- troublesome in time-sharing systems

### SJF
- Shortest-Job_First
- frequently used in **long-term** scheduling.


## RR
- Round-Robin
- for time-sharing systems



### Convoy Effect
- Short process behind long process
- All the other processes wait for the one big process to get off the CPU
- Results in lower CPU and device utilization

## Affinity

- Soft affinity
	- possible to migrate between processors

- Hard affinity
	- run on a specify subset of processors




