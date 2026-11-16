import { OrbitUnavailable } from '@/components/common/OrbitUnavailable'
import { retryConnection, useConnection } from '@/lib/connection'
import { APP_NAME } from '@/lib/brand'

/**
 * "Orbit is unavailable" over the whole app when the connection is still down after a minute. The app stays mounted
 * below, so nothing is lost when the connection is back and the screen goes away. Orbit keeps trying by itself.
 */
export function ConnectionScreen() {
  const { phase } = useConnection()
  if (phase !== 'failed') return null
  return <OrbitUnavailable overlay detail={`${APP_NAME} could not reconnect. It keeps trying, and you can retry now.`} onRetry={retryConnection} />
}
