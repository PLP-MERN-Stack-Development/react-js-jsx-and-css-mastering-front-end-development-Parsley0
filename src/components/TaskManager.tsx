import { useEffect, useMemo, useState } from 'react'
import Button from './Button'
import Card from './Card'
import { useLocalStorage } from '../hooks/useLocalStorage'
import type { Task } from '../types/task'

type TaskFilter = 'all' | 'active' | 'completed'

const filterLabels: Record<TaskFilter, string> = {
  all: 'All',
  active: 'Active',
  completed: 'Completed',
}

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('plp-tasks', [])
  const [filter, setFilter] = useState<TaskFilter>('all')
  const [newTask, setNewTask] = useState('')

  const filteredTasks = useMemo(() => {
    if (filter === 'active') return tasks.filter((task) => !task.completed)
    if (filter === 'completed') return tasks.filter((task) => task.completed)
    return tasks
  }, [tasks, filter])

  const stats = useMemo(
    () => ({
      total: tasks.length,
      completed: tasks.filter((task) => task.completed).length,
      remaining: tasks.filter((task) => !task.completed).length,
    }),
    [tasks]
  )

  useEffect(() => {
    document.title = stats.remaining ? `Tasks (${stats.remaining} open)` : 'All tasks completed!'
  }, [stats.remaining])

  const addTask = () => {
    if (!newTask.trim()) return
    const task: Task = {
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}`,
      title: newTask.trim(),
      completed: false,
    }
    setTasks((prev) => [task, ...prev])
    setNewTask('')
  }

  const toggleTask = (id: string) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <section className="space-y-6">
      <header>
        <p className="text-sm uppercase tracking-wide text-slate-500">Dental care checklist</p>
        <h2 className="mt-1 text-3xl font-bold">Stay consistent between dental visits</h2>
        <p className="mt-2 text-slate-500 dark:text-slate-300">
          Add reminders for brushing routines, mouthwash sessions, appointments, or whitening plans. Everything is saved
          locally via our custom <code>useLocalStorage</code> hook so you never lose momentum.
        </p>
      </header>

      <div className="flex flex-col gap-3 rounded-2xl bg-white/90 p-4 shadow-card backdrop-blur dark:bg-slate-800/70 sm:flex-row">
        <input
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="Describe the task..."
          className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-inner focus:border-sky-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900/60"
        />
        <Button type="button" onClick={addTask} className="w-full sm:w-auto">
          Add reminder
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {(Object.keys(filterLabels) as TaskFilter[]).map((key) => (
          <Button
            key={key}
            variant={filter === key ? 'primary' : 'secondary'}
            onClick={() => setFilter(key)}
          >
            {filterLabels[key]}
          </Button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
          <Card title="Total reminders">
          <span className="text-3xl font-semibold">{stats.total}</span>
        </Card>
        <Card title="Active steps">
          <span className="text-3xl font-semibold text-amber-500">{stats.remaining}</span>
        </Card>
        <Card title="Completed care">
          <span className="text-3xl font-semibold text-emerald-500">{stats.completed}</span>
        </Card>
      </div>

      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <Card>
            <p className="text-center text-slate-500">No care steps match this filter just yet.</p>
          </Card>
        ) : (
          filteredTasks.map((task) => (
            <Card
              key={task.id}
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
              footer={
                <div className="flex items-center gap-2">
                  <Button variant="secondary" onClick={() => toggleTask(task.id)}>
                    {task.completed ? 'Mark active' : 'Mark done'}
                  </Button>
                  <Button variant="danger" onClick={() => deleteTask(task.id)}>
                    Delete
                  </Button>
                </div>
              }
            >
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="mt-1 h-5 w-5 rounded border-slate-300 text-sky-600 focus:ring-sky-500 dark:border-slate-600"
                />
                <div>
                  <p className={`text-base font-medium ${task.completed ? 'line-through opacity-70' : ''}`}>
                    {task.title}
                  </p>
                  <p className="text-xs text-slate-500">{task.completed ? 'Completed care' : 'In progress'}</p>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </section>
  )
}

export default TaskManager

