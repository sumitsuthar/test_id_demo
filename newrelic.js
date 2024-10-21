'use strict'
/**
 * New Relic agent configuration.
 *
 * See lib/config/default.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name: ['honeybunny'],
  /**
   * Your New Relic license key.
   */
  license_key: '',
  host: 'staging-collector.newrelic.com',
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info'
  },
  /**
   * When true, all request headers except for those listed in attributes.exclude
   * will be captured for all traces, unless otherwise specified in a destination's
   * attributes include/exclude lists.
   */
  allow_all_headers: true,

  attributes: {
    /**
     * Prefix of attributes to exclude from all destinations. Allows * as wildcard
     * at end.
     *
     * NOTE: If excluding headers, they must be in camelCase form to be filtered.
     *
     * @name NEW_RELIC_ATTRIBUTES_EXCLUDE
     */
    exclude: [
      'request.headers.cookie',
      'request.headers.authorization',
      'request.headers.proxyAuthorization',
      'request.headers.setCookie*',
      'request.headers.x*',
      'response.headers.cookie',
      'response.headers.authorization',
      'response.headers.proxyAuthorization',
      'response.headers.setCookie*',
      'response.headers.x*'
    ]
  },
  // proxy_host: '192.168.5.179',
  // proxy_port: '46999'
  // proxy_user: 'admin',
  // proxy_pass: 'admin123',

  /**
 * Security Configurations
 */

  security: {

    /**
      * To completely disable security, set agent.enabled flag to false. If the flag is set to false,     the security module is not loaded. This property is read only once at application start.
      */
    agent: {
      enabled: true
    },

    /**
     * enables/disables security agent functions and generation of events.
     */
    enabled: true,

    /**
     *  NR security provides two modes IAST and RASP. Default is IAST
     */
    mode: 'IAST',

    /**
     * New Relic’s SaaS connection URLs
     */
    validator_service_url: 'wss://csec-staging.nr-data.net',
    // scan_request_rate_limit:3500,

    /**
     * Following category of security events can be disabled from generating.
     */
    detection: {
      rci: {
        enabled: true,
      },
      rxss: {
        enabled: true
      },
      deserialization: {
        enabled: true
      }
    },
    scan_controllers: {
      iast_scan_request_rate_limit: 3600,
      scan_instance_count: 1
    },
    scan_schedule:
    {
      delay: 0,
      duration: 0,
      schedule: '',
      always_sample_traces: true
    },

    restriction_criteria: {
      account_info: {
        account_id_values: ['account1', 'account2', '1']
      },
      mapping_parameters:
      {
        header: {
          enabled: false,
          location: ['X-Account', 'X-Account1']
        },
        body: {
          enabled: true,
          location: ['account.id', 'account.id1', 'type.$gte', 'password']
        },
        query:
        {
          enabled: false,
          location: ['id', 'foo']
        },
          path: {
            enabled: true
          },
      }
    },
    exclude_from_iast_scan: {
      // api: ['^\/$', '^\/rce\/attack$', '\/rc.*.\/attack', '\/rce.*', '\/rce'],
      // api:['/rce/attack'], 
      // api: ['/rce/attack\\?payload.*'],
      http_request_parameters:
      {
        header: ['x-account'],
        query: ['q1', 'q2'],
        body: ['body1']
      },
      iast_detection_category: {
        insecure_settings: false,
        invalid_file_access: false,
        sql_injection: false,
        nosql_injection: false,
        ldap_injection: false,
        javascript_injection: false,
        command_injection: false,
        xpath_injection: false,
        ssrf: false,
        rxss: false
      }
    }

  }
}
