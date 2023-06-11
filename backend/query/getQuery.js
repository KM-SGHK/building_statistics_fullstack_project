const queries = {
  eui: `SELECT
    primary_property_type,
    avg(eui) * 5000 AS average_eui
    FROM
    (
        SELECT
            t.id,
            t.primary_property_type AS primary_property_type,
            t2.value / t1.total_gfa AS eui
        FROM
            buildings t
            LEFT JOIN (
                SELECT
                    ose_building_id,
                    SUM(gross_floor_area) as total_gfa
                FROM
                    buildings_gfa
                GROUP BY
                    ose_building_id
            ) t1 ON t.id = t1.ose_building_id
            LEFT JOIN (
                SELECT
                    ose_building_id,
                    value
                FROM
                    metrics
                WHERE
                    metric = 'electricity'
            ) t2 ON t.id = t2.ose_building_id
    ) ft
    GROUP BY primary_property_type`,
  buildings: `select
    *
    from
    buildings`,
  checkUser: `select * from system_user`,
};

export function getQuery(queryLabel) {
  return queries[queryLabel];
}

export async function getUserQuery(userName) {
  return `select * from system_user where username = '${userName}'`;
}
